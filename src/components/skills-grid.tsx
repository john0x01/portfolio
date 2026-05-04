'use client'
import {
  SiAmazonwebservices,
  SiDigitalocean,
  SiDocker,
  SiFigma,
  SiGithub,
  SiNginx,
  SiReact,
  SiVercel,
} from '@icons-pack/react-simple-icons'
import { Globe } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { ReactNode } from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { Button } from './ui/button'
import { Card } from './ui/card'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'

const devOpsSkills = [
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'GitHub', icon: SiGithub, color: '#181717' },
  { name: 'AWS', icon: SiAmazonwebservices, color: '#85ff0b' },
  { name: 'Vercel', icon: SiVercel, color: '#000000' },
  { name: 'DigitalOcean', icon: SiDigitalocean, color: '#0080FF' },
  { name: 'Nginx', icon: SiNginx, color: '#009639' },
]

function WebHeader({
  headline,
  highlight,
  ctaPrimary,
  ctaSecondary,
}: {
  headline: string
  highlight: string
  ctaPrimary: string
  ctaSecondary: string
}) {
  return (
    <div className="flex w-full min-h-40 relative bg-dot">
      <div className="absolute bottom-1 right-1/2 left-1/2 -translate-x-1/2 group-hover/bento:-translate-y-2 transition-all duration-200 h-36 aspect-video bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-xl border border-b-0 rounded-b-none overflow-hidden">
        <div className="w-full flex items-center gap-1 bg-neutral-700 p-1 px-2">
          <div className="bg-red-500 h-1 w-1 rounded-full" />
          <div className="bg-yellow-500 h-1 w-1 rounded-full" />
          <div className="bg-green-500 h-1 w-1 rounded-full" />
        </div>
        <div className="flex flex-col gap-2 w-1/2 mx-auto h-full items-center justify-center">
          <h1 className="text-xs font-bold text-center">
            {headline}{' '}
            <span className="bg-gradient-to-r from-primary-green to-primary-blue text-transparent bg-clip-text">
              {highlight}
            </span>
          </h1>
          <div className="flex items-center gap-2">
            <Button
              variant="secondary"
              className="h-auto py-[2px] px-2 text-[0.5rem] rounded bg-violet-700"
            >
              {ctaPrimary}
            </Button>
            <Button
              variant="outline"
              className="h-auto py-[2px] px-2 text-[0.5rem] rounded"
            >
              {ctaSecondary}
            </Button>
          </div>
        </div>
      </div>
      <div className="w-8 h-8 bg-black rounded-full absolute bottom-4 left-[10%] group-hover/bento:rotate-[5deg] group-hover/bento:translate-x-[5px] transition-all duration-200">
        <SiVercel size={16} className="m-auto" />
      </div>
      <SiReact
        size={32}
        className="absolute text-blue-400 top-4 right-[10%] group-hover/bento:rotate-[5deg] group-hover/bento:-translate-x-[5px] transition-all duration-200"
      />
    </div>
  )
}

function MobileHeader() {
  return (
    <div className="flex w-full min-h-40 relative bg-dot">
      <div className="flex w-full flex-col gap-4 mx-8">
        <div className="flex w-full gap-2 items-center border rounded-full py-1 px-2 group-hover/bento:rotate-[5deg] group-hover/bento:-translate-x-[5px] transition-all duration-200">
          <div className="bg-gradient-to-tr from-primary-green to-primary-blue w-8 h-8 rounded-full" />
          <div className="flex w-full h-6 rounded-full bg-border"></div>
        </div>
        <div className="flex w-3/4 ml-auto gap-2 items-center border rounded-full py-1 px-2 group-hover/bento:rotate-[-5deg] group-hover/bento:-translate-x-[5px] transition-all duration-200">
          <div className="flex w-full h-6 rounded-full bg-border"></div>
          <div className="bg-gradient-to-tr from-primary-green to-primary-blue w-8 h-8 rounded-full" />
        </div>
        <div className="flex w-[85%] gap-2 items-center border rounded-full py-1 px-2 group-hover/bento:rotate-[5deg] group-hover/bento:-translate-x-[5px] transition-all duration-200">
          <div className="bg-gradient-to-tr from-primary-green to-primary-blue w-8 h-8 rounded-full" />
          <div className="flex w-full h-6 rounded-full bg-border"></div>
        </div>
      </div>
    </div>
  )
}

function ApisHeader() {
  const labels = ['GraphQL', 'Express', 'Web Sockets', 'Design Patterns']
  const widths = ['w-[55%]', 'w-[65%]', 'w-[45%]', 'w-[70%]']
  const durations = [
    'duration-[800ms]',
    'duration-[900ms]',
    'duration-700',
    'duration-1000',
  ]
  return (
    <div className="flex flex-col justify-center gap-2 w-full min-h-40 relative overflow-hidden bg-dot">
      {labels.map((label, i) => (
        <div
          key={label}
          className={`flex items-center ${widths[i]} translate-x-[-110%] group-hover/bento:translate-x-0 transition-all ${durations[i]} border rounded-full py-1 px-2 bg-background`}
        >
          <span className="text-xs opacity-80">{label}</span>
        </div>
      ))}
    </div>
  )
}

function UiUxHeader({
  landingHeadline,
  ctaBuy,
  wireframe,
}: {
  landingHeadline: string
  ctaBuy: string
  wireframe: string
}) {
  return (
    <div className="flex items-end justify-center w-full gap-6 min-h-40 relative overflow-hidden bg-dot">
      <div className="relative scale-75 origin-bottom translate-x-1/4 md:scale-100 md:translate-x-0 group-hover/bento:translate-y-2 transition-all duration-200 h-36 aspect-[12/16] bg-white rounded-xl border-2 border-zinc-500 border-b-0 rounded-b-none overflow-visible">
        <div className="absolute top-2 left-8 right-8 h-3 rounded-full bg-zinc-200 group-hover/bento:left-2 group-hover/bento:right-2 transition-all duration-300" />
        <div className="flex flex-col gap-2 w-1/2 mx-auto h-full items-center justify-center p-2">
          <h1 className="text-zinc-900 text-[10px] font-bold text-center">
            {landingHeadline}
          </h1>
          <div className="flex items-center gap-2">
            <Button
              variant="secondary"
              className="h-auto py-[2px] px-2 text-[0.5rem] rounded"
            >
              {ctaBuy}
            </Button>
          </div>
        </div>
        <div className="absolute flex items-center justify-center right-0 top-0 translate-x-1/2 -translate-y-1/2 bg-neutral-700 z-10 border h-8 w-8 rounded-full">
          <Globe size={16} />
        </div>
      </div>
      <div className="relative scale-75 origin-bottom md:scale-100 group-hover/bento:translate-x-2 transition-all duration-200 h-36 aspect-video bg-neutral-200 rounded-xl border border-b-0 rounded-b-none overflow-visible">
        <div className="w-full flex items-center gap-1 bg-neutral-500 p-1 px-2 rounded-t-2xl">
          <div className="bg-neutral-400 h-1 w-1 rounded-full" />
          <div className="bg-neutral-400 h-1 w-1 rounded-full" />
          <div className="bg-neutral-400 h-1 w-1 rounded-full" />
        </div>
        <div className="absolute flex items-center justify-center right-0 top-0 translate-x-1/2 -translate-y-1/2 bg-neutral-700 z-10 border h-8 w-8 rounded-full group-hover/bento:rotate-[-15deg] group-hover/bento:-translate-x-0 group-hover/bento:translate-y-0 transition-all duration-200">
          <SiFigma size={16} />
        </div>
        <div className="flex flex-col gap-2 w-2/3 mx-auto h-full items-center justify-center">
          <h1 className="text-black text-xs font-bold text-center">
            {wireframe}
          </h1>
        </div>
      </div>
    </div>
  )
}

function DatabaseHeader() {
  return (
    <div className="flex flex-col gap-4 w-full min-h-40 relative bg-dot px-[12%]">
      <Card className="flex gap-4 p-2 mr-auto group-hover/bento:rotate-[5deg] group-hover/bento:translate-x-2 group-hover/bento:-translate-y-0 rounded-2xl transition-all duration-200">
        <Image
          src={'/pfp.jpg'}
          alt="João Rocha"
          height={48}
          width={48}
          className="rounded-full min-w-12 scale-75 lg:scale-100"
        />
        <span className="text-xs font-bold opacity-60">
          SELECT * FROM Transactions JOIN Users ON Transactions.UserID = User.ID
        </span>
      </Card>
      <Card className="flex items-center justify-end gap-4 p-1 pl-4 w-full max-w-[80%] ml-auto group-hover/bento:rotate-[-5deg] group-hover/bento:-translate-x-2 group-hover/bento:-translate-y-0 rounded-2xl transition-all duration-200">
        <div className="flex items-center gap-2">
          <div className="rounded-full inline-block w-2 h-2 bg-white/60 group-hover/bento:animate-bounce duration-100" />
          <div className="rounded-full inline-block w-2 h-2 bg-white/60 group-hover/bento:animate-bounce" />
          <div className="rounded-full inline-block w-2 h-2 bg-white/60 group-hover/bento:animate-bounce" />
        </div>
        <div className="rounded-full inline-block min-w-12 min-h-12 bg-gradient-to-r from-primary-green to-primary-blue scale-75 lg:scale-100" />
      </Card>
    </div>
  )
}

function DevOpsHeader() {
  return (
    <div className="flex w-full min-h-40 relative overflow-hidden bg-dot">
      <InfiniteMovingCards
        scrollerClassName="[animation-play-state:paused] group-hover/bento:[animation-play-state:running]"
        items={devOpsSkills.map((item, idx) => {
          const Icon = item.icon
          return (
            <div
              key={item.name + idx}
              className="flex items-center gap-2 h-8 px-4 bg-[#232323] rounded-full"
            >
              <Icon size={14} fill={item.color} />
              <span className="text-xs sm:text-sm md:text-base opacity-60">
                {item.name}
              </span>
            </div>
          )
        })}
      />
      <div className="w-12 h-12 rounded-full bg-primary-green absolute left-1/2 right-1/2 -translate-x-1/2 bottom-8 blur-2xl" />
      <div className="absolute bottom-0 right-1/2 left-1/2 -translate-x-1/2 h-24 aspect-video bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-xl border border-b-0 rounded-b-none overflow-hidden">
        <div className="w-full flex items-center gap-1 bg-neutral-700 p-1 px-2">
          <div className="bg-red-500 h-1 w-1 rounded-full" />
          <div className="bg-yellow-500 h-1 w-1 rounded-full" />
          <div className="bg-green-500 h-1 w-1 rounded-full" />
        </div>
        <div className="flex flex-col gap-2 w-1/2 mx-auto h-full items-center justify-center"></div>
      </div>
    </div>
  )
}

function FullStackHeader({
  backendCard,
  frontendCard,
  devopsCard,
}: {
  backendCard: string
  frontendCard: string
  devopsCard: string
}) {
  return (
    <div className="grid grid-cols-3 md:gap-4 w-full min-h-40 relative bg-dot px-4 md:px-[12%]">
      <Card className="bg-background rotate-[-5deg] translate-x-4 -translate-y-1 group-hover/bento:rotate-0 group-hover/bento:-translate-x-4 group-hover/bento:-translate-y-0 rounded-xl transition-all duration-200">
        <div className="flex flex-col gap-4 p-4 md:p-6 items-center w-full">
          <Image
            src={'/pfp.jpg'}
            alt="Profile picture"
            height={48}
            width={48}
            className="rounded-full scale-75 lg:scale-100"
          />
          <span className="text-center text-xs md:text-sm font-bold opacity-60">
            {backendCard}
          </span>
          <div className="flex items-center justify-center border border-red-600 py-[2px] px-2 rounded-full">
            <span className="text-[8px] md:text-[10px] font-bold text-red-600">
              Back-end
            </span>
          </div>
        </div>
      </Card>
      <Card className="bg-background z-10 rounded-xl transition-all duration-200`">
        <div className="flex flex-col gap-4 p-4 md:p-6 items-center w-full">
          <Image
            src={'/pfp.jpg'}
            alt="Profile picture"
            height={48}
            width={48}
            className="rounded-full scale-75 lg:scale-100"
          />
          <span className="text-center text-xs md:text-sm font-bold opacity-60">
            {frontendCard}
          </span>
          <div className="flex items-center justify-center border border-green-600 py-[2px] px-2 rounded-full">
            <span className="text-[8px] md:text-[10px] font-bold text-green-600">
              Front-end
            </span>
          </div>
        </div>
      </Card>
      <Card className="bg-background rotate-[5deg] -translate-x-4 -translate-y-1 group-hover/bento:rotate-0 group-hover/bento:translate-x-4 group-hover/bento:-translate-y-0 rounded-xl transition-all duration-200`">
        <div className="flex flex-col gap-4 p-4 md:p-6 items-center w-full">
          <Image
            src={'/pfp.jpg'}
            alt="Profile picture"
            height={48}
            width={48}
            className="rounded-full scale-75 lg:scale-100"
          />
          <span className="text-center text-xs md:text-sm font-bold opacity-60">
            {devopsCard}
          </span>
          <div className="flex items-center justify-center border border-yellow-600 py-[2px] px-2 rounded-full">
            <span className="text-[8px] md:text-[10px] font-bold text-yellow-600">
              DevOps
            </span>
          </div>
        </div>
      </Card>
    </div>
  )
}

export function SkillsGrid() {
  const t = useTranslations('skills.items')
  const items: { title: string; description: string; header: ReactNode }[] = [
    {
      title: t('web.title'),
      description: t('web.description'),
      header: (
        <WebHeader
          headline={t('web.headline')}
          highlight={t('web.headlineHighlight')}
          ctaPrimary={t('web.ctaPrimary')}
          ctaSecondary={t('web.ctaSecondary')}
        />
      ),
    },
    {
      title: t('mobile.title'),
      description: t('mobile.description'),
      header: <MobileHeader />,
    },
    {
      title: t('apis.title'),
      description: t('apis.description'),
      header: <ApisHeader />,
    },
    {
      title: t('uiux.title'),
      description: t('uiux.description'),
      header: (
        <UiUxHeader
          landingHeadline={t('uiux.landingHeadline')}
          ctaBuy={t('uiux.ctaBuy')}
          wireframe={t('uiux.wireframe')}
        />
      ),
    },
    {
      title: t('database.title'),
      description: t('database.description'),
      header: <DatabaseHeader />,
    },
    {
      title: t('devops.title'),
      description: t('devops.description'),
      header: <DevOpsHeader />,
    },
    {
      title: t('fullstack.title'),
      description: t('fullstack.description'),
      header: (
        <FullStackHeader
          backendCard={t('fullstack.backendCard')}
          frontendCard={t('fullstack.frontendCard')}
          devopsCard={t('fullstack.devopsCard')}
        />
      ),
    },
  ]

  return (
    <BentoGrid className="w-full">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={i === 6 ? 'md:col-span-2' : i === 3 ? 'lg:col-span-2' : ''}
        />
      ))}
    </BentoGrid>
  )
}
