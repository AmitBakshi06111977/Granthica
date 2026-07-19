import { pgTable, text, timestamp, integer, boolean, pgEnum, primaryKey, index } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// Enums
export const languageEnum = pgEnum("language", [
  "english",
  "hindi",
  "punjabi",
  "bengali",
  "gujarati",
  "tamil",
  "telugu",
  "marathi",
]);

export const outputTypeEnum = pgEnum("output_type", [
  "summary",
  "flashcards",
  "quiz",
  "mindmap",
  "audio",
]);

// Users (synced from Clerk via webhook)
export const users = pgTable("users", {
  id: text("id").primaryKey(), // Clerk user ID
  email: text("email").notNull().unique(),
  fullName: text("full_name"),
  avatarUrl: text("avatar_url"),
  preferredLanguage: languageEnum("preferred_language").default("english").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Books catalog
export const books = pgTable("books", {
  id: text("id").primaryKey(), // e.g. "ncert-phy-12-1"
  title: text("title").notNull(),
  author: text("author").notNull(),
  description: text("description"),
  coverUrl: text("cover_url"),
  language: languageEnum("language").notNull(),
  subject: text("subject"), // Physics, Chemistry, Biology, etc.
  grade: integer("grade"), // 11, 12, etc.
  totalChapters: integer("total_chapters").default(0).notNull(),
  totalPages: integer("total_pages").default(0).notNull(),
  pdfUrl: text("pdf_url"), // S3 or similar
  isPublished: boolean("is_published").default(true).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// User library - books a user has added/saved
export const userBooks = pgTable(
  "user_books",
  {
    userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
    bookId: text("book_id").notNull().references(() => books.id, { onDelete: "cascade" }),
    currentChapter: integer("current_chapter").default(1).notNull(),
    currentPage: integer("current_page").default(1).notNull(),
    progressPercent: integer("progress_percent").default(0).notNull(),
    lastReadAt: timestamp("last_read_at").defaultNow().notNull(),
    addedAt: timestamp("added_at").defaultNow().notNull(),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.userId, table.bookId] }),
    userIdx: index("user_books_user_idx").on(table.userId),
  })
);

// Chat history - AI conversations
export const chatHistory = pgTable(
  "chat_history",
  {
    id: text("id").primaryKey(), // UUID
    userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
    bookId: text("book_id").references(() => books.id, { onDelete: "set null" }),
    chapter: integer("chapter"),
    role: text("role").notNull(), // "user" | "assistant"
    content: text("content").notNull(),
    citations: text("citations"), // JSON string of {chapter, page, snippet}
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => ({
    userBookIdx: index("chat_user_book_idx").on(table.userId, table.bookId),
  })
);

// Generated outputs (summaries, flashcards, etc.)
export const outputs = pgTable(
  "outputs",
  {
    id: text("id").primaryKey(), // UUID
    userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
    bookId: text("book_id").references(() => books.id, { onDelete: "set null" }),
    type: outputTypeEnum("type").notNull(),
    title: text("title").notNull(),
    content: text("content").notNull(), // JSON or markdown
    chapter: integer("chapter"),
    language: languageEnum("language").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => ({
    userBookIdx: index("outputs_user_book_idx").on(table.userId, table.bookId),
  })
);

// Relations
export const usersRelations = relations(users, ({ many }) => ({
  userBooks: many(userBooks),
  chatHistory: many(chatHistory),
  outputs: many(outputs),
}));

export const booksRelations = relations(books, ({ many }) => ({
  userBooks: many(userBooks),
  chatHistory: many(chatHistory),
  outputs: many(outputs),
}));

export const userBooksRelations = relations(userBooks, ({ one }) => ({
  user: one(users, { fields: [userBooks.userId], references: [users.id] }),
  book: one(books, { fields: [userBooks.bookId], references: [books.id] }),
}));

export const chatHistoryRelations = relations(chatHistory, ({ one }) => ({
  user: one(users, { fields: [chatHistory.userId], references: [users.id] }),
  book: one(books, { fields: [chatHistory.bookId], references: [books.id] }),
}));

export const outputsRelations = relations(outputs, ({ one }) => ({
  user: one(users, { fields: [outputs.userId], references: [users.id] }),
  book: one(books, { fields: [outputs.bookId], references: [books.id] }),
}));

// Type exports
export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
export type Book = typeof books.$inferSelect;
export type NewBook = typeof books.$inferInsert;
export type UserBook = typeof userBooks.$inferSelect;
export type NewUserBook = typeof userBooks.$inferInsert;
export type ChatMessage = typeof chatHistory.$inferSelect;
export type NewChatMessage = typeof chatHistory.$inferInsert;
export type Output = typeof outputs.$inferSelect;
export type NewOutput = typeof outputs.$inferInsert;
