import React from 'react'
import Circle from './Circle'

const GalleryHeader = () => {
  return (
    <div className='flex items-center justify-center'>

         <Circle
            color1 = "#DF7369"
            color2 = "#C2E7A4"
            width = {300}
            direction = "90"
            className="left-20 -translate-y-16"
            customSpeed={0.9}
        />
    
        <div className='h-[1px] w-full bg-crimson'></div>
        <div className='px-8'>
            <h1 className='text-crimson'>gallery</h1>
        </div>
        <div className='h-[1px] w-full bg-crimson'></div>

    </div>
  )
}

export default GalleryHeader
