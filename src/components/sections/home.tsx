import { Animate } from '@/components/ui/animate'
import { Button } from '@/components/ui/button'
import { FlipWords } from '@/components/ui/flip-words'
import { useTranslations } from 'next-intl'
import { Download, Star } from 'lucide-react'
import Link from 'next/link'

export function HomeSection() {
  const t = useTranslations('home')
  const words = t.raw('flipWords') as string[]
  const headlineSuffix = t('headlineSuffix')

  return (
    <section
      id="home"
      className="flex w-full h-[720px] sm:h-[900px] items-center justify-center relative overflow-y-hidden"
    >
      <div className="w-full max-w-[1080px] px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-6">
          <h1 className="text-h1 h-[180px] sm:h-[120px] md:h-[272px] lg:h-[204px]">
            {t('headlinePrefix')}
            <FlipWords words={words} />
            {headlineSuffix && (
              <>
                <br />
                {headlineSuffix}
              </>
            )}
          </h1>
          <Animate fromY={40} duration={0.25}>
            <div className="flex items-center gap-4">
              <div className="w-[3px] h-12 bg-gradient-to-b from-primary-green to-primary-blue rounded-full" />
              <p className="md:text-lg opacity-80">{t('tagline')}</p>
            </div>
          </Animate>
          <div className="flex items-center gap-4">
            <Animate direction="left" duration={0.25}>
              <a href={'/cv-joao-rocha.pdf'} download>
                <Button variant="ghost" className="gap-2">
                  <Download /> {t('downloadCV')}
                </Button>
              </a>
            </Animate>
            <Animate direction="left" duration={0.25} delay={0.25}>
              <Link href="#contact">
                <Button>{t('hireCta')}</Button>
              </Link>
            </Animate>
          </div>
        </div>
        <div className="flex h-full items-end md:pb-16">
          <div className="flex flex-col gap-1 md:ml-auto">
            <div className="flex gap-1">
              <Star fill="#FFBA34" strokeWidth={0} />
              <Star fill="#FFBA34" strokeWidth={0} />
              <Star fill="#FFBA34" strokeWidth={0} />
              <Star fill="#FFBA34" strokeWidth={0} />
              <Star fill="#FFBA34" strokeWidth={0} />
            </div>
            <span className="font-bold opacity-60 text-sm md:text-base">
              {t('ratingsLabel')}
            </span>
          </div>
        </div>
      </div>
      <div className="absolute w-[670px] h-[670px] bg-primary-green blur-[150px] opacity-15 -z-10 -top-[335px]" />
    </section>
  )
}
