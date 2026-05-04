import { ContactFormTrigger } from '@/components/contact-form'
import { Animate } from '@/components/ui/animate'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export function ContactSection() {
  const t = useTranslations('contact')
  const tags = ['frontend', 'backend', 'mobile', 'uiux'] as const

  return (
    <section
      id="contact"
      className="w-full flex flex-col items-center overflow-y-hidden"
    >
      <div className="flex w-full max-w-7xl px-4 py-16 flex-col items-center">
        <Animate className="w-full">
          <div className="flex w-full max-w-[1080px] mx-auto flex-col items-center gap-12 md:gap-16 p-8 md:py-16 rounded-2xl border border-white/15 relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary-green to-primary-blue" />
            <header className="w-full flex flex-col items-center gap-8">
              <div className="flex items-center gap-2">
                <Image
                  src={'/pfp.jpg'}
                  width={64}
                  height={64}
                  alt="João Rocha"
                  className="rounded-full scale-75 lg:scale-100"
                />
                <span className="text-h4">João Rocha</span>
              </div>
              <ul className="flex gap-2 flex-wrap justify-center">
                {tags.map((tag) => (
                  <li
                    key={tag}
                    className="flex items-center gap-2 px-4 h-8 bg-white/5 rounded-full"
                  >
                    <span className="text-xs sm:text-sm md:text-base opacity-60">
                      {t(`tags.${tag}`)}
                    </span>
                  </li>
                ))}
              </ul>
            </header>
            <p className="text-sm md:text-base opacity-80 text-center">
              {t('pitch')}
            </p>
            <div className="flex flex-col gap-4 items-center">
              <ContactFormTrigger>
                <Button>{t('cta')}</Button>
              </ContactFormTrigger>
            </div>
          </div>
        </Animate>
      </div>
    </section>
  )
}
