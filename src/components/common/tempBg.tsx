import classNames from 'classnames'
import React, { useEffect, useRef } from 'react'

interface IProps {
    size: number
    className?: string
}

const colorDarkGreen = '#213337'
const colorLightGreen = '#36474C'

const draw = (
    canvasEle: HTMLCanvasElement,
    size: number,
    randomOffsetX: number,
    randomOffsetY: number
) => {
    canvasEle.width = canvasEle.clientWidth
    canvasEle.height = canvasEle.clientHeight

    const numberX = Math.ceil(canvasEle.clientWidth / size) + 1
    const numberY = Math.ceil(canvasEle.clientHeight / size) + 1

    const ctx = canvasEle.getContext('2d')
    if (ctx) {
        ctx.clearRect(0, 0, canvasEle.clientWidth, canvasEle.clientHeight)
        for (let i = 0; i < numberX; i++) {
            for (let j = 0; j < numberY; j++) {
                ctx.fillStyle =
                    ((i % 2) + (j % 2)) % 2 === 0
                        ? colorDarkGreen
                        : colorLightGreen
                ctx.fillRect(
                    -randomOffsetX + i * size,
                    -randomOffsetY + j * size,
                    size,
                    size
                )
            }
        }
    }
}

const TempBg = ({ size, className }: IProps) => {
    const canvas = useRef<HTMLCanvasElement>(null)
    const randomOffsetX = Math.random() * size
    const randomOffsetY = Math.random() * size

    useEffect(() => {
        window.addEventListener('resize', canvasDraw)
        canvasDraw()
        return () => window.removeEventListener('resize', canvasDraw)
    }, [])

    const canvasDraw = () => {
        if (canvas.current) {
            const canvasEle = canvas.current
            draw(canvasEle, size, randomOffsetX, randomOffsetY)
        }
    }

    return (
        <canvas
            ref={canvas}
            className={classNames('absolute h-full w-full', className)}
        />
    )
}

export default TempBg
