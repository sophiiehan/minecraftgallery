import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Circle = ({color1, color2, width, direction, className, anchored = false, customSpeed = null}) => {
    const circleRef = useRef(null)
    const size = typeof width === "number" ? `${width}px` : width
    const numericWidth = typeof width === "number" ? width : parseInt(width)

    useEffect(() => {
        if (anchored) return

        // Use custom speed if provided, otherwise calculate based on size
        // Bigger circles move slower, smaller circles move faster
        const speed = customSpeed !== null ? customSpeed : 400 / (numericWidth + 50)

        const ctx = gsap.context(() => {
            gsap.to(circleRef.current, {
                y: () => window.innerHeight * speed * 0.3,
                ease: 'none',
                scrollTrigger: {
                    trigger: document.body,
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 1,
                },
            })
        })

        return () => ctx.revert()
    }, [numericWidth, anchored, customSpeed])

    return (
        <div
        ref={circleRef}
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
