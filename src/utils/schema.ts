import { relations } from "drizzle-orm";
import { integer, pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const User = pgTable("user", {
    id: serial("id").primaryKey(),
    clerkId: varchar("clerkId").notNull(),
    email: varchar("email").notNull(),
    username: varchar("username").notNull(),
    firstName: varchar("firstName").notNull(),
    lastName: varchar("lastName").notNull(),
    photo: varchar("photo").notNull(),
    createdAt: timestamp('createdAt', { mode: "date" }).defaultNow(),
})

export const usersRelations = relations(User, ({ many, one }) => ({
    mockInterview: many(MockInterview),
    feedback: many(Feedback),
    appFeedback: many(ApplicationFeedBack),
}));

export const MockInterview = pgTable("mockInterview", {
    id: serial("id").primaryKey(),
    jsonMockResp: text("jsonMockResp").notNull(),
    jobPosition: varchar("jobPosition").notNull(),
    jobDesc: varchar("jobDesc").notNull(),
    jobExperience: varchar("jobExperience").notNull(),
    user_id: integer('user_id'),
    createdAt: varchar("createdAt"),
    mockID: varchar("mockID").notNull(),
})

export const interviewRelations = relations(MockInterview, ({ many }) => ({
    feedback: many(Feedback),
}))

export const postsRelations = relations(MockInterview, ({ one }) => ({
    user: one(User, {
        fields: [MockInterview.user_id],
        references: [User.id],
    }),
}));

export const Feedback = pgTable("feedback", {
    id: serial("id").primaryKey(),
    question: varchar("question").notNull(),
    correctAns: varchar("correctAns").notNull(),
    userAns: varchar("userAns").notNull(),
    feedback: text("feedback").notNull(),
    rating: varchar("rating").notNull(),
    interview_id: integer("interview_id"),
    user_id: integer('user_id'),
    createdAt: varchar("createdAt"),
})

export const feedbackRelations = relations(Feedback, ({ one }) => ({
    user: one(User, {
        fields: [Feedback.user_id],
        references: [User.id],
    }),
    mockInterview: one(MockInterview, {
        fields: [Feedback.interview_id],
        references: [MockInterview.id],
    }),
}));

export const ApplicationFeedBack = pgTable("appFeedback", {
    id: serial("id").primaryKey(),
    name: varchar("name").notNull(),
    quote: text("quote").notNull(),
    rating: integer("rating").notNull(),
    picture: varchar("picture"),
    user_id: integer('user_id'),
    createdAt: varchar("createdAt"),
})

export const appFeedbackRelations = relations(ApplicationFeedBack, ({ one }) => ({
    user: one(User, {
        fields: [ApplicationFeedBack.user_id],
        references: [User.id],
    }),
}));