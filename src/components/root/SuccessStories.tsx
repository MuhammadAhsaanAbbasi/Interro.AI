import React from 'react'
import ComponentH4 from '../shared/ComponentH4'
import { InfiniteMovingCards } from '../ui/infinite-moving-cards'
import { company_logos, testimonials } from '@/constants/constants'
import Image from 'next/image'

const SuccessStories = () => {
    return (
        <section className='flex flex-col gap-10 text-[#0F1838] relative overflow-hidden antialiased '>
        <div className='flex flex-col gap-5 justify-center items-center text-center'>
            <ComponentH4 text='Success Stories' />
            <div className='flex flex-col gap-2'>
                <h2 className='text-3xl font-bold text-[#0F1838]'>
                    Interviews by AI helped these job seekers &
                    <span className='text-primary'>
                        {" 41,000+ "}
                    </span>
                    more
                </h2>
                <p className='text-xl text-[#4b4c4e]'>
                    {"You're a mock interview away from your dream job"}
                </p>
                <p className='text-xl text-[#4b4c4e]'>
                    {"Our Interviewers & Mentors have worked at:"}
                </p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-10'>
                {company_logos.map((logo, index) => (
                    <Image
                        key={index}
                        src={logo.src}
                        alt={logo.alt}
                        width={90}
                        height={70}
                        className='w-20 h-full md:w-auto'
                    />
                ))}
            </div>
        </div>
        <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="normal"
            />
        </section>
    )
}

export default SuccessStories