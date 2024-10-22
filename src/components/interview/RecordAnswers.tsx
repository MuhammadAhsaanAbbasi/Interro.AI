"use client";
import { Mic, StopCircle, WebcamIcon } from 'lucide-react'
import React, { useEffect, useState, useTransition } from 'react'
import Webcam from 'react-webcam'
import { Button } from '../ui/button'
import useSpeechToText, { ResultType } from 'react-hook-speech-to-text';
import { generatefeedback } from '@/lib/actions/feedback.actions'
import { toast } from '@/hooks/use-toast'
import { ToastAction } from '../ui/toast'
import { useUser } from '@clerk/nextjs'
import moment from 'moment'

interface Iprops {
    interview_id: string,
    interviewQuestions: InterviewQuestions[],
    activeQuestionIndex: number
}

const RecordAnswers = ({ interview_id, interviewQuestions, activeQuestionIndex }: Iprops) => {
    const { user } = useUser();
    const userId = user?.id as string
    const [userAnswer, setUserAnswer] = useState("");
    const [isPending, StartTransition] = useTransition();
    const {
        isRecording,
        results,
        setResults,
        startSpeechToText,
        stopSpeechToText,
    } = useSpeechToText({
        continuous: true,
        useLegacyResults: false
    });

    useEffect(() => {
        const userResults = results as ResultType[];
        const transcript = userResults.map((result) => result.transcript).join('');
        setUserAnswer(transcript);
    }, [results]);

    const StartStopRecording = () => {
        if (isRecording) {
            stopSpeechToText();
        } else {
            startSpeechToText();
        }
    };

    const values: feedbackGenerateParams = {
        mockInterviewID: interview_id,
        question: interviewQuestions[activeQuestionIndex]?.question,
        correctAns: interviewQuestions[activeQuestionIndex]?.answer,
        userAns: userAnswer,
        userID: userId,
        createdAt: moment().format('DD-MM-yyyy'),
    };

    const updateAnswer = async () => {
        StartTransition(() => {
            generatefeedback(values)
                .then((data) => {
                    if (data?.error) {
                        toast({
                            title: "Recorded Failed!!",
                            variant: "destructive",
                            description: data?.error || data?.message?.message,
                            duration: 2000,
                            action: (
                                <ToastAction altText="Dismiss"  >Dismiss</ToastAction>
                            )
                        });
                    }

                    if (data?.success) {
                        toast({
                            title: "Successfully Submitted!",
                            description: data.success,
                            duration: 2000,
                            action: (
                                <ToastAction altText="Close">Close</ToastAction>
                            ),
                        });
                    }
                })
                .finally(() => {
                    setUserAnswer('');
                    setResults([]);
                })
        })
    }

    useEffect(() => {
        if (!isRecording && userAnswer.length > 10) {
            console.log(`Before Saving: ${userAnswer}`);
            // console.log(values);
            updateAnswer();
            console.log(`After Saving: ${userAnswer}`);
        } else if (userAnswer && userAnswer.length < 10) {
            toast({
                title: 'Answer Failed!!',
                description: 'Your Answer is too Short & Unable to Save in Database!',
                variant: 'destructive',
                duration: 2000,
                action: <ToastAction altText="Dismiss">Dismiss</ToastAction>,
            });
            setUserAnswer('');
            setResults([]);
        }
    }, [userAnswer, isRecording, setResults]);

    return (
        <div className='flex items-center justify-center flex-col'>
            <div className='flex flex-col justify-center my-5 items-center bg-black rounded-lg p-5'>
                <WebcamIcon
                    className='h-[200px] w-[200px] text-white absolute'
                />
                <Webcam
                    mirrored={true}
                    className='h-72 w-[100vw]'
                />
            </div>
            <Button
                variant="outline" className="my-5"
                onClick={StartStopRecording}
                disabled={isPending}
            >
                {isRecording ?
                    <h2 className='text-red-600 animate-pulse flex gap-2 items-center'>
                        <StopCircle />Stop Recording
                    </h2>
                    :

                    <h2 className='text-primary flex gap-2 items-center'>
                        <Mic />  Record Answer</h2>
                }
            </Button>
        </div>
    )
}

export default RecordAnswers