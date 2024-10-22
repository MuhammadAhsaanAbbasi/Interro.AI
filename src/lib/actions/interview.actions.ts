"use server";

import { CreateInterviewSchema } from "@/schemas/interview"
import { db } from "@/utils/db";
import { chatSession } from "@/utils/geminiai";
import { MockInterview, User } from "@/utils/schema";
import { v4 as uuidv4 } from "uuid";
import { eq } from "drizzle-orm";
import * as z from "zod";
import moment from 'moment'

export const generateinterview = async (
    values: z.infer<typeof CreateInterviewSchema>,
    userId: string,
) => {
    const validatedFields = CreateInterviewSchema.safeParse(values)

    if (!validatedFields.success) {
        return { error: "Invalid fields" }
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { jobPosition, jobExperience, jobDescription } = validatedFields.data
    const InputPrompt = `Job position: ${jobPosition}, Job Description: ${jobDescription}, Years of Experience : ${jobExperience} years, Depends on Job Position, Job Description & Years of Experience give us 5 Interview question along with Answer in JSON format, Give us question and answer field on JSON`

    try {
        const result = await chatSession.sendMessage(InputPrompt);
        const MockResponse = (result.response.text()).replace('```json', '').replace('```', '')

        console.log(MockResponse)

        if (MockResponse) {
            // save into database
            const user: UserParams[] = await db.select()
                .from(User)
                .where(eq(User.clerkId, userId));

            const response = await db.insert(MockInterview)
                .values({
                    mockID: uuidv4(),
                    jsonMockResp: MockResponse,
                    jobPosition: jobPosition,
                    jobDesc: jobDescription,
                    jobExperience: jobExperience,
                    user_id: user[0].id,
                    createdAt: moment().format('DD-MM-yyyy')
                })
                .returning({ mockId: MockInterview.mockID })
            
            return { "res" : response[0].mockId, success: "Interview questions generated successfully"}
        }
        else {
            return { error: "Something went wrong in generating a questions" }
        }

    } catch (error) {
        if (error instanceof Error) {
            return { error: "Invalid credentials!", message: error.message };
        }
        return { message: error }
    }
}

export const getInterviewDetails = async ( interview_id: string ) => {
    try {
        const response: InterviewParams[] = await db.select().from(MockInterview)
                .where(eq(MockInterview.mockID, interview_id))
        return { success : response[0] }
    } catch (error) {
        if (error instanceof Error) {
            return { error: "Invalid credentials!", message: error.message };
        }
        return { message: error }
    }
}