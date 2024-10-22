import React from 'react'
import InterviewButton from '../shared/InterviewButton'

const Ready = () => {
    return (
        <section className='flex flex-col justify-center items-center gap-10 p-8 bg-secondary rounded-xl'>
            <div className='flex flex-col lg:flex-row justify-between items-center px-5'>
                <h2 className='text-3xl font-extrabold text-[#0F1838] w-full text-left leading-[50px]'>
                    Make your next job interview <br />
                    <span className='bg-primary/20 px-2'>
                        stress-free thanks to AI
                    </span>
                </h2>
                <h2 className='text-3xl font-extrabold text-[#0F1838] w-full text-left leading-[35px]'>
                    Works for every type of job Interview & Role
                </h2>
            </div>
            <InterviewButton text='Try now for free' />
        </section>
    )
}

export default Ready