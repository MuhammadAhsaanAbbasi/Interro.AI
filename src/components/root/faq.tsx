import React from 'react'
import ComponentH4 from '../shared/ComponentH4'
import { FrequentQuestionAnswer } from '../shared/FrequentQuestionAnswer'

const FAQ = () => {
    return (
        <section className='flex flex-col gap-8 text-[#0F1838] relative overflow-hidden antialiased'>
            <div className='flex flex-col gap-4 justify-center items-center text-center'>
                <ComponentH4 text='FAQ' />
                <div className='flex flex-col gap-2'>
                    <h2 className='text-3xl font-bold text-[#0F1838]'>
                        Frequently asked questions
                    </h2>
                    <p className='text-xl text-[#4b4c4e]'>
                        How can we help you?
                    </p>
                </div>
            </div>
            <FrequentQuestionAnswer />
        </section>
    )
}

export default FAQ