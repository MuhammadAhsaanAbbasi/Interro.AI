import { InterviewDelivered } from '@/components/interview/InterviewDelivered'
import React from 'react'

interface Iprops {
    params: {
        interview_id: string
    }
}

const InterviewStartPage = ({ params: { interview_id } }: Iprops) => {
    return (
        <main className='my-8'>
            <InterviewDelivered interview_id={interview_id} />
        </main>
    )
}

export default InterviewStartPage