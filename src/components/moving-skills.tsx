'use client'
import Image from 'next/image'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'

export function MovingSkills() {
  return (
    <div className="flex w-full items-center relative overflow-hidden">
      <InfiniteMovingCards
        items={skills.map((item, idx) => (
          <Image
            key={item.src + idx}
            src={item.src}
            alt={item.alt}
            height={item.height}
            width={item.width}
          />
        ))}
        direction="right"
        speed="slow"
      />
    </div>
  )
}

const skills = [
  {
    src: '/skills/react.svg',
    alt: 'React',
    width: 240,
    height: 120,
  },
  {
    src: '/skills/nodejs.svg',
    alt: 'Node.js',
    width: 240,
    height: 120,
  },
  {
    src: '/skills/typescript.svg',
    alt: 'TypeScript',
    width: 360,
    height: 120,
  },
  {
    src: '/skills/react.svg',
    alt: 'React',
    width: 240,
    height: 120,
  },
  {
    src: '/skills/aws.svg',
    alt: 'AWS',
    width: 200,
    height: 120,
  },
  {
    src: '/skills/nestjs.svg',
    alt: 'NestJS',
    width: 240,
    height: 120,
  },
  {
    src: '/skills/nextjs.svg',
    alt: 'NextJS',
    width: 240,
    height: 120,
  },
]
