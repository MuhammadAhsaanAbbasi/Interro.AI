// InterviewDeliveredClient.tsx
"use client";
import React, { useState } from 'react';
import { Button } from '../ui/button';
import InterviewQuestions from './InterviewQuestions';
import RecordAnswers from './RecordAnswers';
import { useRouter } from 'next/navigation';

interface Iprops {
    interview_id: string;
    interviewQuestions: InterviewQuestions[];
}

const InterviewDeliveredClient = ({ interview_id, interviewQuestions }: Iprops) => {
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

    const router = useRouter();
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <InterviewQuestions
                interviewQuestions={interviewQuestions}
                activeQuestionIndex={activeQuestionIndex}
            />
            <section className="flex flex-col gap-8">
                <RecordAnswers
                    interview_id={interview_id}
                    interviewQuestions={interviewQuestions}
                    activeQuestionIndex={activeQuestionIndex}
                />
                <div className="flex justify-end gap-6">
                    {activeQuestionIndex > 0 && (
                        <Button onClick={() => setActiveQuestionIndex(activeQuestionIndex - 1)}>
                            Previous Question
                        </Button>
                    )}
                    {activeQuestionIndex !== interviewQuestions.length - 1 && (
                        <Button onClick={() => setActiveQuestionIndex(activeQuestionIndex + 1)}>
                            Next Question
                        </Button>
                    )}
                    {activeQuestionIndex === interviewQuestions.length - 1 && (
                        <Button
                        onClick={() => router.push(`/dashboard/interview/${interview_id}/feedback`) }
                        >
                                End Interview
                        </Button>
                    )}
                </div>
            </section>
        </div>
    );
};

export default InterviewDeliveredClient;
