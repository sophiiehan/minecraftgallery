import React from 'react'

const Circle = ({color1, color2, width, direction, className}) => {
    const size = typeof width === "number" ? `${width}px` : width
    return (
        <div
        className={`absolute rounded-full ${className}`}
        style={{
            width: size,
            height: size,
            background: `linear-gradient(${direction}deg, color(display-p3 0.87 0.45 0.41), ${color2})`,
        }}
        />
    )
}

export default Circle
