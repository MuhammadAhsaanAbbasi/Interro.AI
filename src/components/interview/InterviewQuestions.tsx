"use client"
import { Lightbulb, Volume2 } from 'lucide-react'
import React from 'react'

interface Iprops {
    interviewQuestions: InterviewQuestions[] | undefined,
    activeQuestionIndex: number
}

const InterviewQuestions = ({ interviewQuestions, activeQuestionIndex }: Iprops) => {

    const textToSpeech = (text: string | undefined) => {
        if (!text) return;

        if ("speechSynthesis" in window) {
            const speech = new SpeechSynthesisUtterance();
            speech.text = text;
            speech.voice = window.speechSynthesis.getVoices()[2];
            speech.rate = 1;
            speech.pitch = 2;
            window.speechSynthesis.speak(speech);
        } else {
            alert("Speech synthesis is not supported in this browser.")
        }

    }

    return (
        <section className="flex flex-col gap-5 my-5 border p-5 rounded-md">
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {interviewQuestions && interviewQuestions?.map((_, index) => (
                    <h2
                        key={index}
                        className={`p-2 border rounded-full text-sm text-center cursor-pointer
                        ${activeQuestionIndex == index && "bg-primary text-white"}
                        `}
                    >
                        Question #{index + 1}
                    </h2>
                ))}
            </div>
            <h2 className='text-xl font-medium my-3' >
                {interviewQuestions && interviewQuestions[activeQuestionIndex]?.question}
            </h2>
            <Volume2
                className='cursor-pointer'
                onClick={() => textToSpeech(interviewQuestions && interviewQuestions[activeQuestionIndex]?.question)}
            />
            <div className="p-5 border rounded-lg border-green-300 bg-green-100">
                <h2 className="flex gap-2 items-center text-green-500">
                    <Lightbulb />
                    <span className="font-bold">Information</span>
                </h2>
                <h2 className="mt-3 text-green-500">
                    Enable Video Web Cam and Microphone to Start your AI Generated Mock Interview...
                </h2>
            </div>
        </section>
    )
}

export default InterviewQuestions