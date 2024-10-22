// InterviewDelivered.tsx
import React from 'react';
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import InterviewDeliveredClient from './InterviewDeliveredClient';

export const InterviewDelivered = async ({ interview_id }: { interview_id: string }) => {
    const response: InterviewParams[] = await db
        .select()
        .from(MockInterview)
        .where(eq(MockInterview.mockID, interview_id));
    const interviewDetails = response[0];
    const interviewQuestions: InterviewQuestions[] = JSON.parse(interviewDetails.jsonMockResp);

    return (
        <InterviewDeliveredClient
            interview_id={interview_id}
            interviewQuestions={interviewQuestions}
        />
    );
};
