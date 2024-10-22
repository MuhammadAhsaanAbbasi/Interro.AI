"use client";
import { db } from '@/utils/db';
import { Feedback, MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

export const InterviewFeedBack = ({ interview_id }: { interview_id: string }) => {
    const [feedbackList, setFeedbackList] = useState<feedbackParams[]>([]);
    const router = useRouter();
    
    useEffect(() => {
        const fetchFeedback = async () => {
            const interview = await db.select().from(MockInterview)
                .where(eq(MockInterview.mockID, interview_id));

            const response: feedbackParams[] = await db.select().from(Feedback)
                .where(eq(Feedback.interview_id, interview[0].id))
                .orderBy(Feedback.id);

            setFeedbackList(response);
        }
        fetchFeedback()
    })

    return (
        <div className='my-10'>
            {
                feedbackList.length == 0 ?
                    <h2 className='font-bold text-xl text-gray-500'>No Interview Feedback Record Found</h2>
                    :
                    <>
                        <h2 className='text-3xl font-bold text-green-500'>Congratulation!</h2>
                        <h2 className='font-bold text-2xl'>Here is your interview feedback</h2>

                        <h2 className='text-sm text-gray-500'>Find below interview question with correct answer, Your answer and feedback for improvement</h2>

                        <div className='flex flex-col my-5'>
                            {feedbackList && feedbackList.map((item, index) => (
                                <Accordion type="multiple" key={index}
                                    className="w-full">
                                    <AccordionItem value={`item-${index + 1}`}>
                                        <AccordionTrigger className='p-3 bg-secondary rounded-lg flex justify-between my-5 text-left gap-7 w-full'>
                                            {item.question}
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div className='flex flex-col gap-2'>
                                                <h2 className='text-red-500 p-2 border rounded-lg'>
                                                    <span className='font-bold'>Rating:</span>{item.rating}
                                                </h2>
                                                <h2 className='p-2 border rounded-lg bg-red-50 text-sm text-red-900'>
                                                    <span className='font-bold'>Your Answer: </span>{item.userAns}
                                                </h2>
                                                <h2 className='p-2 border rounded-lg bg-green-50 text-sm text-green-900'>
                                                    <span className='font-bold'>Correct Answer: </span>{item.correctAns}
                                                </h2>
                                                <h2 className='p-2 border rounded-lg bg-blue-50 text-sm text-primary'>
                                                    <span className='font-bold'>Feedback: </span>{item.feedback}
                                                </h2>

                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            ))}
                        </div>
                    </>
            }
            <Button onClick={()=>router.replace('/dashboard')}>Go Home</Button>
        </div>
    )
};