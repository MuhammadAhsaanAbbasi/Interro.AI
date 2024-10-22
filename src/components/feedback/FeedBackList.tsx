import Image from 'next/image'
import React from 'react'
import Stars from '../shared/Stars'

const FeedBackLists = ({ feedBackList }: { feedBackList: AppfeedbackParams[] }) => {
    return (
        <section className=''>
            <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    feedBackList.map((feedback, index) => (
                        <li
                            className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-secondary/70 px-8 py-6 md:w-[450px] bg-secondary"
                            key={index}
                        >
                            <blockquote>
                                <div
                                    aria-hidden="true"
                                    className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                                ></div>
                                <div className="flex flex-col justify-start gap-2">
                                    <Stars rating={feedback.rating} />
                                    <span className="relative z-20 text-base leading-[1.6] text-[#0F1838] font-normal">
                                        {feedback.quote}
                                    </span>
                                </div>
                                <div className="relative z-20 mt-6 flex flex-row items-center gap-2">
                                    <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                                        <Image
                                            src={feedback.picture || ""}
                                            alt={feedback.name}
                                            height={50}
                                            width={50}
                                            className="aspect-square h-full w-full"
                                        />
                                    </div>
                                    <span className="text-lg leading-[1.6] font-medium hover:underline-offset-2">
                                        {feedback.name}
                                    </span>
                                </div>
                            </blockquote>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default FeedBackLists