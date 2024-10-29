'use client'
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion'
import { AlignRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode, useState } from 'react'
import { FlagSelect } from './flag-select'
import { Button } from './ui/button'
import { Sheet, SheetContent } from './ui/sheet'

function NavLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="text-sm sm:text-base opacity-60 hover:opacity-100 transition-all duration-300"
    >
      {children}
    </Link>
  )
}

export function NavBar({ language = 'pt' }: { language?: string }) {
  const { scrollYProgress } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const [sheetOpen, setSheetOpen] = useState(false)

  function handleToggleSheet() {
    setSheetOpen(!sheetOpen)
  }

  useMotionValueEvent(scrollYProgress, 'change', () => {
    if (scrollYProgress.get() < 0.04) {
      setScrolled(false)
    } else {
      setScrolled(true)
    }
  })

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            backgroundColor: 'transparent',
            y: -100,
          }}
          animate={{
            y: 0,
            paddingLeft: scrolled ? 32 : 0,
            paddingRight: scrolled ? 32 : 0,
            background: scrolled ? 'rgba(0, 0, 0, 0.5)' : 'transparent',
          }}
          style={{
            backdropFilter: 'blur(80px)',
            borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.15)' : '',
          }}
          transition={{
            duration: 0.2,
          }}
          className="fixed left-0 right-0 flex justify-center z-50 bg-background"
        >
          <div className="w-full max-w-7xl flex p-4 items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src={'/pfp.jpg'}
                alt="Profile picture"
                height={48}
                width={48}
                className="rounded-full scale-75 lg:scale-100"
              />
              {scrolled ? (
                <span className="hidden sm:block font-bold text-sm md:text-base lg:text-lg opacity-80">
                  JOÃO ROCHA
                </span>
              ) : (
                <span className="font-bold text-sm md:text-base lg:text-lg opacity-80">
                  JOÃO ROCHA
                </span>
              )}
            </div>
            <div className="hidden lg:flex items-center gap-6">
              <NavLink href="#home">{languages[language].home}</NavLink>
              <NavLink href="#projects">{languages[language].projects}</NavLink>
              <NavLink href="#skills">{languages[language].skills}</NavLink>
              <NavLink href="#about">{languages[language].about}</NavLink>
            </div>
            <div className="flex items-center gap-4">
              <motion.div
                initial={{
                  opacity: 1,
                  x: 0,
                }}
                animate={{
                  opacity: scrolled ? 0 : 1,
                  x: scrolled ? 10 : 0,
                }}
                transition={{
                  duration: 0.5,
                }}
              >
                <FlagSelect
                  defaultFlag={language === 'pt' ? 'brazil' : 'usa'}
                />
              </motion.div>
              <Link href="#contact">
                <Button className="hidden sm:block">
                  🔥 {languages[language].cta}
                </Button>
                <Button className="sm:hidden">
                  {languages[language].ctaShort}
                </Button>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="flex lg:hidden"
                onClick={handleToggleSheet}
              >
                <AlignRight />
              </Button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent
          className="flex flex-col items-center justify-between p-12 sm:p-16 pb-24 sm:pb-32"
          side="left"
        >
          <div className="flex items-center gap-2">
            <Image
              src={'/pfp.jpg'}
              alt="Profile picture"
              height={64}
              width={64}
              className="rounded-full scale-75 lg:scale-100"
            />
            <span className="font-bold text-sm md:text-base lg:text-lg opacity-80">
              JOÃO ROCHA
            </span>
          </div>
          <Link
            onClick={handleToggleSheet}
            href="#home"
            className="text-xl sm:text-2xl"
          >
            {languages[language].home}
          </Link>
          <Link
            onClick={handleToggleSheet}
            href="#projects"
            className="text-xl sm:text-2xl"
          >
            {languages[language].projects}
          </Link>
          <Link
            onClick={handleToggleSheet}
            href="#skills"
            className="text-xl sm:text-2xl"
          >
            {languages[language].skills}
          </Link>
          <Link
            onClick={handleToggleSheet}
            href="#about"
            className="text-xl sm:text-2xl"
          >
            {languages[language].about}
          </Link>
          <FlagSelect mobile />
          <Link onClick={handleToggleSheet} href="#contact">
            <Button>🔥 {languages[language].cta}</Button>
          </Link>
        </SheetContent>
      </Sheet>
    </>
  )
}

const languages = {
  pt: {
    home: 'Home',
    projects: 'Projetos',
    skills: 'Skills',
    about: 'Sobre',
    cta: 'Me contrate agora',
    ctaShort: 'Contratar',
  },
  en: {
    home: 'Home',
    projects: 'Projects',
    skills: 'Skills',
    about: 'About',
    cta: 'Hire me now',
    ctaShort: 'Hire',
  },
} as {
  [key: string]: {
    home: string
    projects: string
    skills: string
    about: string
    cta: string
    ctaShort: string
  }
}
