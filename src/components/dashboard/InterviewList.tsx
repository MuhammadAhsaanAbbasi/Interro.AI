"use client"
import { db } from '@/utils/db'
import { useUser } from '@clerk/nextjs'
import { desc, eq } from 'drizzle-orm'
import { MockInterview, User } from '@/utils/schema'
import React, { useEffect, useState } from 'react'
import InterviewItemCard from './InterviewItemCard'

const InterviewList = () => {
    const { user } = useUser()
    const userId = user?.id as string
    const [interviewLists, setInterviewLists] = useState<[] | InterviewParams[]>([])
    useEffect(() => {
        const getData = async () => {
            const users = await db.select()
                .from(User)
                .where(eq(User.clerkId, userId));

            const result: InterviewParams[] = await db.select()
                .from(MockInterview)
                .where(eq(MockInterview.user_id, users[0]?.id))
                .orderBy(desc(MockInterview.id));
            console.log(result)
            setInterviewLists(result)
        }
        getData()
    }, [userId])

    return (
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3'>
            {
                interviewLists.length > 0 ? interviewLists.map((interviewList:InterviewParams) => (
                    <InterviewItemCard
                        interview={interviewList}
                        key={interviewList.id} />
                ))
                    :
                    [1, 2, 3, 4].map((_, index) => (
                        <div className='h-[100px] w-full bg-gray-200 animate-pulse rounded-lg ' key={index}>
                        </div>
                    ))
            }
        </section>
    )
}

export default InterviewList