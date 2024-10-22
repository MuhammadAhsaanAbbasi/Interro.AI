import { StarFilledIcon } from '@radix-ui/react-icons';
import { StarHalfIcon } from 'lucide-react';
import React from 'react'

const Stars = ({rating}:{rating: number}) => {
    const getStars = (rating: number) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        const stars = [];

        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <span key={`full-${i}`} className="text-primary">
                    <StarFilledIcon className="h-5 w-5" />
                </span>
            );
        }

        if (halfStar) {
            stars.push(
                <span key="half" className="text-primary">
                    <StarHalfIcon className="h-5 w-5" />
                </span>
            );
        }

        for (let i = fullStars + (halfStar ? 1 : 0); i < 5; i++) {
            stars.push(
                <span key={`empty-${i}`} className="text-[#D3D3D3]">
                    <StarFilledIcon className="h-5 w-5" />
                </span>
            );
        }

        return stars;
    };
    return (
        <span className="flex justify-start my-2">
            {getStars(rating)}
        </span>
    )
}

export default Stars