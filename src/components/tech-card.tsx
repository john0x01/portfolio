'use client'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { ReactNode, useState } from 'react'

export function TechCard({
  number,
  children,
}: {
  number: string
  children: ReactNode
}) {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div
      className={'flex flex-col gap-8 p-4 border-t relative'}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        initial={{
          top: 0,
          height: 2,
          left: '50%',
          right: '50%',
          position: 'absolute',
        }}
        animate={{
          left: isHovered ? 0 : '50%',
          right: isHovered ? 0 : '50%',
        }}
        transition={{
          duration: 0.5,
        }}
        className="bg-gradient-to-r from-primary-green to-primary-blue"
      />
      <span
        className={cn(
          'text-sm transition-all duration-500',
          isHovered ? '' : 'opacity-60',
        )}
      >
        {number}
      </span>
      <motion.div
        animate={{
          y: isHovered ? -20 : 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className="flex flex-1 w-full h-full items-center"
      >
        {children}
      </motion.div>
    </div>
  )
}
