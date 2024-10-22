import { ReactNode } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "InterroAI",
    description: "AI Mock Interviewer",
    icons: {
        icon: "https://hrk-boutique.s3.ap-south-1.amazonaws.com/Interro.AI.png",
    },
};

const DashboardLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        <main className='py-10 px-8 sm:px-16 md:px-24 lg:px-32'>
            {children}
        </main>
    );
};

export default DashboardLayout;