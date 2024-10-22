import { InterviewFeedBack } from '@/components/feedback/InterviewFeedBack'
import React from 'react'

interface Iprops {
    params: {
        interview_id: string
    }
}


const InterviewFeedbackPage = ({ params: { interview_id } }: Iprops) => {
    return (
        <InterviewFeedBack interview_id={interview_id} />
    )
}

export default InterviewFeedbackPage