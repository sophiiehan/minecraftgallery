import React from 'react'
import Circle from '../components/Circle'

const Background = ({children}) => {
  return (
    <div className='relative overflow-hidden'>
        <Circle
            color1 = "#DF7369"
            color2 = "#C2E7A4"
            width = {550}
            direction = "160"
            className="-right-20 -top-12"
        />

        <Circle
            color1 = "#DF7369"
            color2 = "#CDBD8E"
            width = {850}
            direction = "160"
            className="-translate-x-10 -translate-y-24"
        />
        <div className='relative min-h-screen w-full'>
            {children}
        </div>
    </div>
  )
}

export default Background
