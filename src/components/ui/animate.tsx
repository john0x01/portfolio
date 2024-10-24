'use client'
import { motion, useInView } from 'framer-motion'
import { ReactNode, useRef } from 'react'

interface AnimateProps {
  children: ReactNode
  className?: HTMLDivElement['className']
  duration?: number
  direction?: 'left' | 'right' | 'up' | 'down'
  delay?: number
  fromX?: number
  fromY?: number
  once?: boolean
}

const INITIAL_Y_POS = {
  left: 0,
  right: 0,
  down: 100,
  up: -100,
}

const INITIAL_X_POS = {
  down: 0,
  up: 0,
  left: -100,
  right: 100,
}

export function Animate({
  children,
  className = '',
  duration = 0.5,
  direction = 'down',
  delay = 0,
  fromX,
  fromY,
  once = true,
}: AnimateProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once })

  const initialY = INITIAL_Y_POS[direction]
  const initialX = INITIAL_X_POS[direction]

  return (
    <motion.div
      className={className}
      ref={ref}
      initial={{
        y: fromY === undefined ? initialY : fromY,
        x: fromX === undefined ? initialX : fromX,
        opacity: 0,
      }}
      animate={{
        y: isInView ? 0 : initialY,
        x: isInView ? 0 : initialX,
        opacity: isInView ? 1 : 0,
      }}
      transition={{
        duration,
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}
