import { Animate } from '@/components/ui/animate'
import { Button } from '@/components/ui/button'
import {
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiYoutube,
} from '@icons-pack/react-simple-icons'
import { Download } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

export function AboutSection() {
  const t = useTranslations('about')
  return (
    <section
      id="about"
      className="w-full flex flex-col items-center relative overflow-y-hidden"
    >
      <div className="w-full max-w-7xl px-4 py-8 sm:py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="absolute right-[40%] hidden md:block">
          <Image
            src={'/pfp-large.jpg'}
            alt="João Rocha"
            width={700}
            height={700}
          />
          <div className="absolute left-0 top-0 right-0 bottom-0 bg-gradient-to-r from-[#010101] via-transparent to-[#010101]" />
        </div>
        <div className="md:h-[600px]">
          <div className="relative md:hidden">
            <Image
              src={'/pfp-large.jpg'}
              alt="João Rocha"
              width={350}
              height={350}
            />
            <div className="absolute left-0 top-0 right-0 bottom-0 bg-gradient-to-r from-[#010101] via-transparent to-[#010101]" />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <Animate direction="left" duration={0.25}>
            <h1 className="text-h2 z-50">{t('title')}</h1>
          </Animate>
          <Animate direction="left" duration={0.5} fromX={1}>
            <p className="text-sm md:text-base opacity-80">{t('p1')}</p>
          </Animate>
          <Animate direction="left" duration={0.5} fromX={1}>
            <p className="text-sm md:text-base opacity-80">{t('p2')}</p>
          </Animate>
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-4 opacity-60">
              <Link href="https://linkedin.com/in/joaorochame" target="_blank">
                <SiLinkedin />
              </Link>
              <Link href="https://github.com/john0x01" target="_blank">
                <SiGithub />
              </Link>
              <Link href="https://instagram.com/joaorocha.me" target="_blank">
                <SiInstagram />
              </Link>
              <Link href="https://www.youtube.com/@joaorochame" target="_blank">
                <SiYoutube />
              </Link>
            </div>
            <a href={'/cv-joao-rocha.pdf'} download>
              <Button variant="ghost" className="gap-2">
                <Download /> {t('downloadCV')}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
