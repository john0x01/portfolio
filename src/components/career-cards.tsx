'use client'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

const cardIds = [
  'mobileSideral',
  'freelanceFull',
  'mobileSolus',
  'smartnew',
  'freelanceFront',
] as const

interface CareerCardProps {
  title: string
  description: string
  info: string
  responsibilities: string[]
}

function CareerCard({
  title,
  description,
  responsibilities,
  info,
}: CareerCardProps) {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 p-8 md:py-16">
      <div className="flex flex-col gap-4 md:gap-8">
        <header className="flex flex-col gap-4">
          <h1 className="text-h4">{title}</h1>
          <span className="text-sm md:text-lg font-bold opacity-60">
            {info}
          </span>
        </header>
        <ul className="flex w-full flex-wrap gap-2">
          {responsibilities.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 h-8 px-4 bg-[#090909] rounded-full"
            >
              <Check className="text-primary-blue scale-75 md:scale-100" />
              <span className="text-xs sm:text-sm md:text-base opacity-60">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <p className="text-sm md:text-base opacity-80">{description}</p>
    </div>
  )
}

export function CareerCards() {
  const t = useTranslations('career.items')
  const [hoveredIndex, setHoveredIndex] = useState(0)

  const cards = cardIds.map((id) => ({
    id,
    title: t(`${id}.title`),
    info: t(`${id}.info`),
    responsibilities: t.raw(`${id}.responsibilities`) as string[],
    description: t(`${id}.description`),
  }))

  return (
    <div className="flex w-full flex-col gap-4">
      {cards.map((card, idx) => (
        <motion.div
          onMouseEnter={() => setHoveredIndex(idx)}
          animate={{
            backgroundColor: hoveredIndex === idx ? '#050509' : '',
          }}
          key={card.id}
          className="w-full border border-white/15 rounded-2xl relative overflow-hidden"
        >
          <motion.div
            initial={{
              bottom: 0,
              top: 0,
              opacity: 0,
              width: 1,
              position: 'absolute',
            }}
            animate={{
              opacity: hoveredIndex === idx ? 1 : 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="bg-gradient-to-r from-primary-green to-primary-blue"
          />
          <CareerCard
            title={card.title}
            info={card.info}
            responsibilities={card.responsibilities}
            description={card.description}
          />
        </motion.div>
      ))}
    </div>
  )
}
