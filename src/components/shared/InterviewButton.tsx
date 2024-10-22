"use client"
import React from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'
import { ArrowRight } from 'lucide-react'

const InterviewButton = ({ text }: { text: string }) => {
    const router = useRouter();
    return (
            <Button size={"lg"}
                onClick={() => router.push('/dashboard')}
                className={`py-4 px-8 rounded-full font-medium shadow-md flex justify-center items-center gap-2 hover:scale-[1.02] transition-all duration-300 ease-in`}>
                <span className='text-lg'>
                    {text}
                </span>
                <ArrowRight />
            </Button>
    )
}

export default InterviewButton