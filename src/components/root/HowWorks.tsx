import React from 'react'
import ComponentH4 from '../shared/ComponentH4'
import { AudioLines, ClipboardList, ThumbsUp } from 'lucide-react'
import Points from '../shared/Points'
import InterviewButton from '../shared/InterviewButton'

const HowWorks = () => {
    const generate_question = [
        {
            id: 0,
            line: "Behavioral & technical questions"
        },
        {
            id: 1,
            line: "Works for all job descriptions and industries"
        }
    ]

    const practice_answering = [
        {
            id: 0,
            line: "Multiple input options to answer (audio/text)"
        },
        {
            id: 1,
            line: "Data is private, audio is not stored"
        }
    ]

    const ai_coaching = [
        {
            id: 0,
            line: "Based on proven interview frameworks like the STAR method"
        },
        {
            id: 1,
            line: "Upload your resume for even better feedback (Pro)"
        }
    ]
    return (
        <section className='flex flex-col gap-10 text-[#0F1838]'>
            <div className='flex flex-col gap-5 justify-center items-center text-center'>
                <ComponentH4 text='How it works' />
                <div className='flex flex-col gap-2'>
                    <h2 className='text-3xl font-bold text-[#0F1838]'>
                        Give yourself an unfair advantage in interviews
                    </h2>
                    <p className='text-xl text-[#4b4c4e]'>
                        {"Wouldn't it be nice to know which questions the recruiters will ask you (and how to answer them) before the interview?"}
                    </p>
                </div>
            </div>
            {/* Step # 1 */}
            <div className='flex flex-col lg:flex-row gap-5 justify-between my-2'>
                <div className='basis-5/12 flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-2'>
                    <ClipboardList className='bg-primary/20 p-2 text-primary rounded-full' size={40} />
                    <h3 className='text-2xl font-medium'>
                        Step 1 - Generate questions
                    </h3>
                    <p className='text-lg text-[#4b4c4e]'>
                        Paste a job description, receive <span className='text-primary'>
                            realistic interview questions,
                        </span> tailored to the role.
                    </p>
                    <Points points={generate_question} />
                </div>
                {/* Step # 1 Video */}
                <div className="basis-7/12">
                    <video
                        muted loop autoPlay width={800}
                        height={600}
                        className='w-full h-auto rounded-lg'
                    >
                        <source src="https://cs2100320028857faae.blob.core.windows.net/interviewsbyai/step-1.mp4" type='video/mp4' />
                    </video>
                </div>
            </div>

            {/* Step # 2 */}
            <div className='flex flex-col-reverse lg:flex-row gap-5 justify-between my-2'>
                {/* Step # 2 Video */}
                <div className="basis-7/12">
                    <video
                        muted loop autoPlay width={800}
                        height={600}
                        className='w-full h-auto rounded-lg'
                    >
                        <source src='https://cs2100320028857faae.blob.core.windows.net/interviewsbyai/step-2.mp4' type='video/mp4' />
                    </video>
                </div>
                <div className='basis-5/12 flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-2'>
                    <AudioLines className='bg-primary/20 p-2 text-primary rounded-full' size={40} />
                    <h3 className='text-2xl font-medium'>
                        Step 2 - Practice answering
                    </h3>
                    <p className='text-lg text-[#4b4c4e]'>
                        Record your answer with <span className='text-primary'>
                            audio or text,
                        </span> simulating the interview experience.
                    </p>
                    <Points points={practice_answering} />
                </div>
            </div>

            {/* Step # 3 */}
            <div className='flex flex-col lg:flex-row gap-5 justify-between my-2'>
                <div className='basis-5/12 flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-2'>
                    <ThumbsUp className='bg-primary/20 p-2 text-primary rounded-full' size={40} />
                    <h3 className='text-2xl font-medium'>
                        Step 3 - Improve with AI coaching
                    </h3>
                    <p className='text-lg text-[#4b4c4e]'>
                        Get instant <span className='text-primary'>
                            AI feedback
                        </span> {"& an improved sample response showing how you could've answered the question."}
                    </p>
                    <Points points={ai_coaching} />
                </div>
                {/* Step # 3 Video */}
                <div className="basis-7/12">
                    <video
                        muted loop autoPlay width={800}
                        height={600}
                        className='w-full h-auto rounded-lg'
                    >
                        <source src='https://cs2100320028857faae.blob.core.windows.net/interviewsbyai/step-3.mp4' type='video/mp4' />
                    </video>
                </div>
            </div>

            <div className='flex justify-center items-center px-8'>
                <InterviewButton text='Start an Interview' />
            </div>

        </section>
    )
}

export default HowWorks