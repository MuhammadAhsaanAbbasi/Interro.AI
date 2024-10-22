import React from 'react'

const ComponentH4 = ({text}: {text: string}) => {
    return (
        <h4 className='bg-primary/20 p-1.5 text-sm text-primary rounded-lg font-semibold'>
            {text}
        </h4>
    )
}

export default ComponentH4