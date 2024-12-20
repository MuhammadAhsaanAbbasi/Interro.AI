import { ReactNode } from 'react';
import { Metadata } from 'next';
import Header from '@/components/navigation/header/Header';
import Footer from '@/components/navigation/footer/Footer';

export const metadata: Metadata = {
    title: "InterroAI",
    description: "AI Mock Interviewer",
    icons: {
        icon: "https://myapplication-logos.s3.ap-south-1.amazonaws.com/InterroAI.svg",
    },
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        <main>
            <Header />
            {children}
            <Footer />
        </main>
    );
};

export default RootLayout;