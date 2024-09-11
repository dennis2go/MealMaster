import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const meals = pgTable("meals", {
  id: serial("id").primaryKey(),
  description: text("description").notNull(),
  mealtype: text("mealtype").notNull(),
});

export type InsertPost = typeof meals.$inferInsert;
export type SelectPost = typeof meals.$inferSelect;
