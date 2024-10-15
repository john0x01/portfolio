'use client'
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll
} from 'framer-motion'
import { AlignRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode, useState } from 'react'
import { FlagSelect } from './flag-select'
import { Button } from './ui/button'

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
  const [visible, setVisible] = useState(false)

  useMotionValueEvent(scrollYProgress, 'change', () => {
    if (scrollYProgress.get() < 0.05) {
      setVisible(false)
      console.log(false)
    } else {
      setVisible(true)
      console.log(true)
    }
  })

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          backgroundColor: 'transparent',
          y: -100,
        }}
        animate={{
          backgroundColor: visible ? '#030303' : 'transparent',
          borderBottom: visible ? '1px solid rgba(255, 255, 255, 0.15)' : '',
          paddingLeft: visible ? 32 : 0,
          paddingRight: visible ? 32 : 0,
          className: 'bg-red-500',
          y: 0,
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
            {visible ? (
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
            <NavLink href="#">Home</NavLink>
            <NavLink href="#">Projetos</NavLink>
            <NavLink href="#">Skills</NavLink>
            <NavLink href="#">Sobre</NavLink>
            <NavLink href="#">Contato</NavLink>
          </div>
          <div className="flex items-center gap-4">
            <motion.div
              initial={{
                opacity: 1,
                x: 0,
              }}
              animate={{
                opacity: visible ? 0 : 1,
                x: visible ? 10 : 0,
              }}
              transition={{
                duration: 0.2,
              }}
            >
              <FlagSelect />
            </motion.div>
            <Button className="hidden sm:flex">🔥 Me contrate agora</Button>
            <Button className="sm:hidden">Contratar</Button>
            <Button variant="ghost" size="icon" className="flex lg:hidden">
              <AlignRight />
            </Button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
