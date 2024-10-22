"use client";
import { Lightbulb, WebcamIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import Webcam from "react-webcam"
import { getInterviewDetails } from '@/lib/actions/interview.actions'
import Link from 'next/link';

const InterviewDetails = ({ interview_id }: { interview_id: string }) => {
    const [interviewDetails, setInterviewDetails] = useState<InterviewParams>()
    const [webcamEnabled, setWebcamEnabled] = useState(false)

    useEffect(() => {
        const getData = async () => {
            const response = await getInterviewDetails(interview_id)
            console.log(response)
            setInterviewDetails(response.success)
        }
        getData()
    }, [interview_id])

    return (
        <div className='my-10'>
            <h2 className='font-bold text-2xl'>
                {"Let's Get Started"}
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <section className='flex flex-col gap-5 my-5'>
                    <div className='flex flex-col gap-5 p-5 border rounded-lg justify-center'>
                        <h2 className='text-lg'><span className='font-bold'>Job Role/Job Position: </span>{interviewDetails?.jobPosition}</h2>
                        <h2 className='text-lg'><span className='font-bold'>Job Description/Tech Stack: </span>{interviewDetails?.jobDesc}</h2>
                        <h2 className='text-lg'><span className='font-bold'>Years of Experience: </span>{interviewDetails?.jobExperience}</h2>
                    </div>
                    <div className='p-5 border rounded-lg border-yellow-300 bg-yellow-100'>
                        <h2 className='flex gap-2 items-center text-yellow-500'> <Lightbulb /><span className='font-bold'>Information</span></h2>
                        <h2 className='mt-3 text-yellow-500'>{"Enable Video Web Cam and Microphone to Start your AI Generated Mock Interview, It Has 5 question which you can answer and at the last you will get the report on the basis of your answer. NOTE: We never record your video , Web cam access you can disable at any time if you want"}</h2>
                    </div>
                </section>
                <section className=''>
                    {
                        webcamEnabled ?
                            <Webcam
                                onUserMedia={() => setWebcamEnabled(true)}
                                onUserMediaError={() => setWebcamEnabled(false)}
                                mirrored={true}
                                className='h-72 w-full my-5 bg-secondary rounded-lg border'
                            />
                            :
                            <>
                                <WebcamIcon className='h-72 w-full my-5 p-20 bg-secondary rounded-lg border' />
                                <Button variant="ghost" className="w-full"
                                    onClick={() => setWebcamEnabled(true)}>
                                    Enable Web Cam and Microphone
                                </Button>
                            </>
                    }
                    <div className='flex justify-end items-end'>
                        <Link
                            href={`/dashboard/interview/${interview_id}/start`}
                        >
                            <Button
                            >
                                Start Interview
                            </Button>
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default InterviewDetails