import Image from 'next/image'
import React from 'react'
import InterviewButton from '../shared/InterviewButton'
import Avatar from '../shared/Avatar'
import Stars from '../shared/Stars'
import ComponentH4 from '../shared/ComponentH4'

const Hero = () => {
    return (
        <section className='flex flex-col lg:flex-row gap-10'>
            <div className='basis-4/12 flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-5'>
                <ComponentH4 text='#1 AI Interview Prep' />
                <div className='flex flex-col justify-center gap-3.5'>
                    <h1 className='text-4xl leading-[50px] font-extrabold text-[#0F1838]'>
                        Boost your confidence, <br />
                        <span className='bg-primary/20 px-1.5'>ace the job interview</span>
                    </h1>
                    <p className='text-xl text-[#6A6C70]'>Practice job interview questions tailored to your job description. Get instant AI feedback and suggestions to improve your answers.</p>
                    <div className='flex flex-col justify-center items-center lg:items-start gap-2'>
                        <InterviewButton text='Try now for free' />
                        <h4 className='text-sm text-[#C6C9CF] px-5'>No Credit card Needed</h4>
                    </div>
                </div>
                <div className='flex items-center gap-8'>
                    <Avatar />
                    <div className='flex flex-col justify-center'>
                        <Stars rating={5} />
                        <h5 className='text-base font-medium text-[#0F1838]'>Trusted by 41,000+ job seekers</h5>
                    </div>
                </div>
            </div>
            <div className='basis-8/12 py-8 px-8'>
                {/* image */}
                <Image
                    src={"https://interviewingio-assets.s3.amazonaws.com/images/schedule-practice.svg"}
                    alt='Scheduling Call'
                    width={800}
                    height={600}
                    className='w-full h-auto'
                    priority={true}
                />
            </div>
        </section>
    )
}

export default Hero