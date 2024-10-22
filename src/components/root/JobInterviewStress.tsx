import { ArrowRight, CircleCheck, CircleX, Diff } from 'lucide-react'
import React from 'react'

const JobInterviewStress = () => {
    const data = [
        {
            text1: "Unprepared",
            text2: "Organized & Ready",
        },
        {
            text1: "Nervous",
            text2: "Confident answers",
        },
        {
            text1: "Ghosted",
            text2: "Receive final offers",
        },
    ]
    const data1 = ["Unprepared", "Nervous", "Ghosted"]

    const data2 = ["Organized & Ready", "Confident answers", "Receive final offers"]
    return (
        <section className='flex flex-col lg:flex-row justify-center items-center gap-16 p-8 bg-secondary rounded-xl'>
            <h2 className='text-4xl font-extrabold text-[#0F1838] w-full text-left leading-[50px]'>
                Make your next job interview <br />
                <span className='bg-primary/20 px-2'>
                    stress-free thanks to AI
                </span>
            </h2>
            {/* Md Screen */}
            <div className='hidden md:flex flex-col justify-center items-center gap-4 w-full'>
                <div className='flex justify-between items-center gap-8 w-full'>
                    <span className='text-base text-[#0F1838] font-medium w-full text-center'>Without Interviews By A.I</span>
                    <Diff className='text-secondary' size={30} />
                    <span className='text-base text-[#0F1838] font-medium w-full text-center'>With Interviews By A.I</span>
                </div>
                {
                    data.map((item, index) => (
                        <div className='flex justify-between items-center gap-5 w-full' key={index}>
                            <div className='inline-flex items-center justify-center gap-2 text-lg font-medium whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-[#BF3434] shadow-sm bg-[#BF3434]/50 rounded-md px-10 h-20 w-full'>
                                <CircleX />
                                {item.text1}
                            </div>
                            <ArrowRight size={50} />
                            <div className='inline-flex items-center justify-center gap-2 whitespace-nowrap text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-[#EBF9F6] shadow h-20 px-10 w-full rounded-md'>
                                <CircleCheck />
                                {item.text2}
                            </div>
                        </div>
                    ))
                }
            </div>
            {/* Mobile Screen */}
            <div className='flex md:hidden flex-col justify-center items-center gap-5 w-full'>
                <div className='flex flex-col justify-between items-center gap-3 w-full'>
                    <span className='text-base text-[#0F1838] font-medium w-full text-center'>Without Interviews By A.I</span>
                    {data1.map((item, index) => (
                        <div className='inline-flex items-center justify-center gap-2 text-lg font-medium whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-[#BF3434] shadow-sm bg-[#BF3434]/50 rounded-md px-10 h-20 w-full' key={index}>
                            <CircleX />
                            {item}
                        </div>
                    ))}
                </div>
                <div className='flex flex-col justify-between items-center gap-3 w-full'>
                    <span className='text-base text-[#0F1838] font-medium w-full text-center'>With Interviews By A.I</span>
                    {data2.map((item, index) => (
                        <div className='inline-flex items-center justify-center gap-2 whitespace-nowrap text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-[#EBF9F6] shadow h-20 px-10 w-full rounded-md' key={index}>
                            <CircleCheck />
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default JobInterviewStress