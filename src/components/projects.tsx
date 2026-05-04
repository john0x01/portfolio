'use client'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React, { useState } from 'react'
import { Animate } from './ui/animate'
import { Button } from './ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'

type ProjectItem = {
  id: string
  title: string
  src: string
  tags: string[]
  href: string
  service: string
  description: string
}

const projectsData: Omit<ProjectItem, 'service' | 'description'>[] = [
  {
    id: 'corelli',
    title: 'Corelli',
    src: '/projects/corelli-cover.png',
    tags: ['featured', 'dashboards', 'websites'],
    href: '/projects/corelli',
  },
  {
    id: 'bookingGpt',
    title: 'Booking GPT',
    src: '/projects/booking-gpt-cover.png',
    tags: ['featured', 'saas'],
    href: '/projects/corelli',
  },
  {
    id: 'centralCaverna',
    title: 'Central Caverna',
    src: '/projects/central-caverna-cover.png',
    tags: ['featured', 'apps'],
    href: '/projects/corelli',
  },
  {
    id: 'solusVisitas',
    title: 'Solus Visitas',
    src: '/projects/solus-visitas-cover.png',
    tags: ['featured', 'apps'],
    href: '/projects/corelli',
  },
  {
    id: 'burgerDelivery',
    title: 'Burger Delivery',
    src: '/projects/delivery-cover.png',
    tags: ['apps'],
    href: '/projects/corelli',
  },
  {
    id: 'hivePay',
    title: 'Hive Pay',
    src: '/projects/hivepay-cover.png',
    tags: ['websites', 'dashboards'],
    href: '/projects/corelli',
  },
]

function useProjects(): ProjectItem[] {
  const t = useTranslations('projects.items')
  return projectsData.map((p) => ({
    ...p,
    service: t(`${p.id}.service`),
    description: t(`${p.id}.description`),
  }))
}

function Card({
  item,
  className = '',
}: {
  item: ProjectItem
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex flex-col border group/card overflow-hidden h-full',
        className,
      )}
    >
      <div className="w-full aspect-[3/4] relative">
        <Image
          src={item.src}
          alt={item.title}
          width={1080}
          height={1080}
          className="w-full aspect-[3/4] object-cover"
        />
        <div className="absolute left-0 top-0 bottom-0 right-0 opacity-0 group-hover/card:opacity-100 transition-all duration-500 bg-black/50">
          <div className="absolute left-0 top-4 group-hover/card:translate-x-4 transition-all duration-700 py-2 px-4 bg-[#090909] rounded-full">
            <span className="text-xs md:sm">{item.service}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-2 py-4 gap-1 relative">
        <h1>{item.title}</h1>
        <p className="text-sm opacity-60 group-hover/card:translate-x-4 transition-all duration-300">
          {item.description}
        </p>
      </div>
    </div>
  )
}

function Carousel({ items }: { items: ProjectItem[] }) {
  const carouselRef = React.useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  function checkCanScroll() {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth)
    }
  }

  function scrollLeft() {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' })
    }
  }

  function scrollRight() {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' })
    }
  }

  return (
    <div className="flex flex-col lg:hidden">
      <div
        className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth [scrollbar-width:none]"
        ref={carouselRef}
        onScroll={checkCanScroll}
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
            className="min-w-64 h-full"
          >
            <Card item={item} className="h-full" />
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-2">
        <Button
          className="w-full h-12 text-sm text-center rounded-none focus:outline-none"
          variant="outline"
          onClick={scrollLeft}
          disabled={!canScrollLeft}
        >
          <ArrowLeft />
        </Button>
        <Button
          className="w-full h-12s text-sm text-center rounded-none focus:outline-none"
          variant="outline"
          onClick={scrollRight}
          disabled={!canScrollRight}
        >
          <ArrowRight />
        </Button>
      </div>
    </div>
  )
}

function Cards({ items, filter }: { items: ProjectItem[]; filter: string }) {
  return (
    <div className="hidden lg:grid lg:grid-cols-4">
      {items
        .filter((item) => item.tags.includes(filter))
        .map((item, index) => (
          <Animate key={item.title + index} fromY={40} once={false}>
            <Card item={item} />
          </Animate>
        ))}
    </div>
  )
}

export function Projects() {
  const t = useTranslations('projects.tabs')
  const items = useProjects()
  const tabs = ['featured', 'saas', 'apps', 'websites', 'dashboards'] as const

  return (
    <Tabs defaultValue="featured" className="w-full flex flex-col items-center">
      <TabsList className="hidden lg:grid grid-cols-5 w-full bg-transparent h-fit">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab}
            className="border border-border/50 py-4 data-[state=active]:bg-white data-[state=active]:text-black text-sm sm:md-base group relative overflow-hidden"
            value={tab}
          >
            <span className="group-hover:-translate-y-1 transition-all duration-200">
              {t(tab)}
            </span>
            <div className="absolute h-[1px] left-0 -bottom-2 right-0 bg-white group-hover:-translate-y-2 transition-all duration-200" />
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent className="w-full" value="featured">
        <Cards items={items} filter="featured" />
        <Carousel items={items} />
      </TabsContent>
      <TabsContent className="w-full" value="saas">
        <Cards items={items} filter="saas" />
      </TabsContent>
      <TabsContent className="w-full" value="apps">
        <Cards items={items} filter="apps" />
      </TabsContent>
      <TabsContent className="w-full" value="websites">
        <Cards items={items} filter="websites" />
      </TabsContent>
      <TabsContent className="w-full" value="dashboards">
        <Cards items={items} filter="dashboards" />
      </TabsContent>
    </Tabs>
  )
}
