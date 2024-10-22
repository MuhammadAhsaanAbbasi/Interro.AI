import React from 'react'
import { AnimatedTooltip } from '../ui/animated-tooltip';

const Avatar = () => {
    const people = [
        {
            id: 1,
            name: "Antonio Erdeljac",
            designation: "Software Engineer",
            image:
                "https://myapplication-logos.s3.ap-south-1.amazonaws.com/antonio.jpeg",
        },
        {
            id: 2,
            name: "Hamzah Syed",
            designation: "JamStack Developer",
            image:
                "https://myapplication-logos.s3.ap-south-1.amazonaws.com/hamzah_syed.png",
        },
        {
            id: 3,
            name: "Adrian Hajdin - JS Mastery",
            designation: "Next.js Enthusiast",
            image:
                "https://myapplication-logos.s3.ap-south-1.amazonaws.com/Adrian.jpeg",
        },
    ];
    return (
        <div className="flex flex-row items-center my-5 w-auto">
            <AnimatedTooltip items={people} />
        </div>
    )
}

export default Avatar