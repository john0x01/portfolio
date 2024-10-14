'use client'
import { cn } from '@/lib/utils'
import { IconArrowNarrowLeft, IconArrowNarrowRight } from '@tabler/icons-react'
import { motion } from 'framer-motion'
import Image, { ImageProps } from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

interface CarouselProps {
  items: JSX.Element[]
  initialScroll?: number
}

type Card = {
  src: string
  title: string
  category: string
}

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = React.useState(false)
  const [canScrollRight, setCanScrollRight] = React.useState(true)

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll
      checkScrollability()
    }
  }, [initialScroll])

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth)
    }
  }

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' })
    }
  }

  return (
    <div className="relative w-full group">
      <div
        className="flex w-full overflow-x-scroll overscroll-x-auto py-4 scroll-smooth [scrollbar-width:none]"
        ref={carouselRef}
        onScroll={checkScrollability}
      >
        <div
          className={cn(
            'absolute right-0  z-[1000] h-auto  w-[5%] overflow-hidden bg-gradient-to-l',
          )}
        ></div>

        <div
          className={cn(
            'flex flex-row justify-start gap-4 pl-4',
            'max-w-7xl mx-auto',
          )}
        >
          {items.map((item, index) => (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: 0.2 * index,
                  ease: 'easeOut',
                  once: true,
                },
              }}
              key={'card' + index}
              className="last:pr-[5%] md:last:pr-[33%]  rounded-3xl"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
      {canScrollLeft && (
        <div className="absolute sm:opacity-0 group-hover:opacity-100 transition-all duration-300 left-10 bottom-1/2 top-1/2 -translate-y-1/2 z-50">
          <button
            className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
          </button>
        </div>
      )}
      {canScrollRight && (
        <div className="absolute sm:opacity-0 group-hover:opacity-100 transition-all duration-300 right-10 bottom-1/2 top-1/2 -translate-y-1/2 z-50">
          <button
            className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
          </button>
        </div>
      )}
    </div>
  )
}

export const Card = ({
  card,
  index,
  href,
  layout = false,
}: {
  card: Card
  href: string
  index: number
  layout?: boolean
}) => {
  return (
    <Link href={href}>
      <motion.div
        layoutId={layout ? `card-${card.title}` : undefined}
        className="rounded-3xl bg-gray-100 dark:bg-neutral-900 h-80 w-56 md:h-[40rem] md:w-96 overflow-hidden flex flex-col items-start justify-start relative z-10"
      >
        <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
        <div className="relative z-40 p-8">
          <motion.p
            layoutId={layout ? `category-${index}-${card.category}` : undefined}
            className="text-white text-sm md:text-base font-medium font-sans text-left"
          >
            {card.category}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="text-white text-xl md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-2"
          >
            {card.title}
          </motion.p>
        </div>
        <BlurImage
          src={card.src}
          alt={card.title}
          fill
          className="object-cover absolute z-10 inset-0"
        />
      </motion.div>
    </Link>
  )
}

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: ImageProps) => {
  const [isLoading, setLoading] = useState(true)
  return (
    <Image
      className={cn(
        'transition duration-300',
        isLoading ? 'blur-sm' : 'blur-0',
        className,
      )}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === 'string' ? src : undefined}
      alt={alt || 'Background of a beautiful view'}
      {...rest}
    />
  )
}
