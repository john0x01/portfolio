import { CareerCards } from '@/components/career-cards'
import { Animate } from '@/components/ui/animate'
import { TracingBeam } from '@/components/ui/tracing-beam'
import { useTranslations } from 'next-intl'

export function CareerSection() {
  const t = useTranslations('career')
  return (
    <section className="w-full flex flex-col items-center overflow-y-hidden">
      <div className="flex w-full max-w-7xl flex-col p-4 gap-4 sm:gap-8 md:gap-16">
        <Animate direction="right">
          <h1 className="text-h2">{t('title')}</h1>
        </Animate>
        <div className="flex w-full ">
          <TracingBeam className="hidden md:flex md:gap-16">
            <CareerCards />
          </TracingBeam>
          <div className="w-full flex md:hidden">
            <CareerCards />
          </div>
        </div>
      </div>
    </section>
  )
}
