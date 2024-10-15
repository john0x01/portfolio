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

export function NavBar() {
  const { scrollYProgress } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const [sheetOpen, setSheetOpen] = useState(false)

  function handleToggleSheet() {
    setSheetOpen(!sheetOpen)
  }

  useMotionValueEvent(scrollYProgress, 'change', () => {
    if (scrollYProgress.get() < 0.05) {
      setScrolled(false)
      console.log(false)
    } else {
      setScrolled(true)
      console.log(true)
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
            backgroundColor: scrolled ? '#030303' : 'transparent',
            borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.15)' : '',
            paddingLeft: scrolled ? 32 : 0,
            paddingRight: scrolled ? 32 : 0,
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
                height={64}
                width={64}
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
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#projects">Projetos</NavLink>
              <NavLink href="#skills">Skills</NavLink>
              <NavLink href="#about">Sobre</NavLink>
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
                <FlagSelect />
              </motion.div>
              <Link href="#contact">
                <Button className="hidden sm:flex">🔥 Me contrate agora</Button>
                <Button className="sm:hidden">Contratar</Button>
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
            Home
          </Link>
          <Link
            onClick={handleToggleSheet}
            href="#projects"
            className="text-xl sm:text-2xl"
          >
            Projetos
          </Link>
          <Link
            onClick={handleToggleSheet}
            href="#skills"
            className="text-xl sm:text-2xl"
          >
            Skills
          </Link>
          <Link
            onClick={handleToggleSheet}
            href="#about"
            className="text-xl sm:text-2xl"
          >
            Sobre
          </Link>
          <FlagSelect mobile />
          <Link onClick={handleToggleSheet} href="#contact">
            <Button>🔥 Me contrate agora</Button>
          </Link>
        </SheetContent>
      </Sheet>
    </>
  )
}
