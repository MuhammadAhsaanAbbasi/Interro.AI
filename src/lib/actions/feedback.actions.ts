"use server";
import AppFeedback from "@/components/feedback/AppFeedback";
import { db } from "@/utils/db";
import { chatSession } from "@/utils/geminiai";
import { ApplicationFeedBack, Feedback, MockInterview, User } from "@/utils/schema";
import { eq } from "drizzle-orm";
import moment from "moment";

export const generatefeedback = async (values: feedbackGenerateParams) => {
    const feedbackPrompt = `"Question: ${values.question}
        User Answer: ${values.userAns}, Depends on question and user answer for give interview question \n
        please give us rating for answer in number from 1-5 and feedback as area of improvement if any \n
        in just 3 to 5 lines to improve it in JSON format with rating field and feedback field`
    try {
        const result = await chatSession.sendMessage(feedbackPrompt);
        const MockResponse = (result.response.text()).replace('```json', '').replace('```', '')
        const jsonFeedbackResponse: feedback = JSON.parse(MockResponse)
        console.log(jsonFeedbackResponse)

        if (jsonFeedbackResponse) {
            const user: UserParams[] = await db.select()
                .from(User)
                .where(eq(User.clerkId, values.userID));

            const interview: InterviewParams[] = await db.select()
                .from(MockInterview)
                .where(eq(MockInterview.mockID, values.mockInterviewID));
            
            const response = await db.insert(Feedback)
                .values({
                    question: values.question,
                    correctAns: values.correctAns,
                    userAns: values.userAns,
                    feedback: jsonFeedbackResponse.feedback,
                    rating: jsonFeedbackResponse.rating,
                    interview_id: interview[0].id,
                    user_id: user[0].id,
                    createdAt: values.createdAt,
                })
            
            if (!response) {
                return { error: "Something went wrong in generating a feedback" }
            }

            return { success: "User Answer Recorded Successfully!!" }
        } else {
            return { error: "Something went wrong in generating a feedback" }
        }
    } catch (error) {
        if (error instanceof Error) {
            return { error: "Invalid credentials!", message: error };
        }
        return { message: error }
    }
}

export const generateAppfeedback = async (values: AppfeedbackGenerateParams ) => {
    try {
            const user: UserParams[] = await db.select()
                .from(User)
                .where(eq(User.clerkId, values.user_id));
            
            const feedback_request = await db.select()
                .from(ApplicationFeedBack).where(eq(ApplicationFeedBack.user_id, user[0].id));
            
            if (feedback_request.length > 0) {
                return { error: "You have already submitted a feedback" }
            }
            
            const response = await db.insert(ApplicationFeedBack)
                .values({
                    name: values.name,
                    quote: values.quote,
                    rating: values.rating,
                    picture: values.picture,
                    user_id: user[0].id,
                    createdAt: moment().format('DD-MM-yyyy'),
                })
            if (!response) {
                return { error: "Something went wrong to submitting a feedback" }
            }
            return { success: "User Feedback Submit Successfully!!" }
    } catch (error) {
        if (error instanceof Error) {
            return { error: "Invalid credentials!", message: error };
        }
        return { message: error }
    }
}

export const getAppfeedback = async () => {
    try {
            const response = await db.select()
                .from(ApplicationFeedBack).orderBy(ApplicationFeedBack.id);
            
            if (!response) {
                return { error: "Something went wrong to submitting a feedback" }
            }

            return { success: response }
    } catch (error) {
        if (error instanceof Error) {
            return { error: "Invalid credentials!", message: error };
        }
        return { message: error }
    }
}