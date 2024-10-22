import InterviewDetails from '@/components/interview/InterviewDetails'
import React from 'react'

interface Iprops {
    params : {
        interview_id : string
    }
}

const InterviewPage = ({params: {interview_id}}: Iprops) => {
    return <InterviewDetails interview_id={interview_id} />
}

export default InterviewPage