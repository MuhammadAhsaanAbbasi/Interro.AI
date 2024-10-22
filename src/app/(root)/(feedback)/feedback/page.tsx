import { AppFeedback } from '@/components/feedback/AppFeedback'
import React from 'react'

const FeedBackPage = () => {
    return (
        <main>
            <h1 className='text-4xl font-extrabold text-[#0F1838]'>Feedbacks</h1>
            <p className='text-xl text-[#4b4c4e]'>Your Feedback Matters to Us</p>
            <AppFeedback />
        </main>
    )
}

export default FeedBackPage