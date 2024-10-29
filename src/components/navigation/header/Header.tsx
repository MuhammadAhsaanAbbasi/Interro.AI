"use client"
import { Button } from '@/components/ui/button';
import { SignInButton, UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

const Header = () => {
    const path = usePathname();
    const { isSignedIn } = useUser();
    return (
        <header className='px-6 sm:px-12 md:px-18 flex justify-between items-center gap-3 shadow-sm'>
            <Link href={"/"}
                className='flex items-center gap-1'
            >
                <Image
                    src={"https://myapplication-logos.s3.ap-south-1.amazonaws.com/InterroAI.svg"}
                    alt='InterroAI'
                    width={80}
                    height={80}
                    className='w-16 h-16'
                    priority
                />
                <span className='text-2xl font-bold text-primary'>Interro.AI</span>
            </Link>
            {
                isSignedIn ?
                    <nav className='flex items-center justify-between gap-4'>
                        <Link href={"/dashboard"}>
                            <Button variant={"outline"} className={`${path === "/dashboard" && "bg-accent text-accent-foreground"}`}>
                                Dashboard
                            </Button>
                        </Link>
                        <Link href={"/feedback"}>
                            <Button variant={"outline"} className={`${path === "/dashboard/upgrade" && "bg-accent text-accent-foreground"}`}>
                                FeedBacks
                            </Button>
                        </Link>
                        <UserButton />
                    </nav>
                    :
                    <SignInButton>
                        <Button>
                            Get Started
                        </Button>
                    </SignInButton>
            }

        </header>
    )
}

export default Header