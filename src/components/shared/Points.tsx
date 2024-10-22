import { Check } from 'lucide-react'
import React from 'react'

interface Props {
    id: number,
    line: string
}

const Points = ({ points }: { points: Props[] }) => {
    return (
        <div className='flex flex-col justify-center'>
            {
                points.map((item) => (
                    <div key={item.id} className='flex items-center gap-2'>
                        <Check className='text-primary' size={20} />
                        <p className='text-lg text-[#4b4c4e]'>
                            {item.line}
                        </p>
                    </div>
                ))
            }
        </div>
    )
}

export default Points