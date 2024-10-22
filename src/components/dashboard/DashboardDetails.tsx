import React from 'react'
import AddNewInterview from './AddNewInterview'
import InterviewList from './InterviewList'

export const DashboardDetails = () => {
    return (
        <>
            <section className='flex flex-col justify-center gap-5'>
                <div className='flex flex-col justify-center gap-1'>
                    <h2 className='text-primary text-3xl font-bold'>Dashboard</h2>
                    <h5 className='text-xl text-[#7B818D]'>Create & Start your A.I Mockup Interview</h5>
                </div>
                <AddNewInterview />
            </section>
            <section className='flex flex-col justify-center gap-5'>
                <div className='flex flex-col justify-center my-2'>
                    <h2 className='text-black text-2xl font-bold'>Previous Mock Interview</h2>
                </div>
                <InterviewList />
            </section>
        </>
    )
}