'use client'
import { usePathname, useRouter } from '@/i18n/navigation'
import { useLocale } from 'next-intl'
import Image from 'next/image'

export function FlagSelect({ mobile = false }: { mobile?: boolean }) {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const currentFlag = locale === 'pt' ? 'brazil' : 'usa'
  const otherLocale = locale === 'pt' ? 'en' : 'pt'
  const otherFlag = otherLocale === 'pt' ? 'brazil' : 'usa'

  function switchTo(target: 'pt' | 'en') {
    router.replace(pathname, { locale: target })
  }

  if (mobile) {
    return (
      <div className="flex items-center gap-4">
        <button onClick={() => switchTo('pt')} aria-label="Português">
          <Image
            src={`/icons/brazil.svg`}
            alt="Brazil flag"
            width={32}
            height={32}
          />
        </button>
        <button onClick={() => switchTo('en')} aria-label="English">
          <Image src={`/icons/usa.svg`} alt="USA flag" width={32} height={32} />
        </button>
      </div>
    )
  }

  return (
    <div className="hidden lg:block group relative">
      <Image
        src={`/icons/${currentFlag}.svg`}
        alt={currentFlag}
        width={24}
        height={24}
      />
      <div className="absolute bottom-0 opacity-0 group-hover:-bottom-12 group-hover:opacity-100 transition-all duration-300">
        <div className="w-8 h-8 bg-secondary flex items-center justify-center rounded">
          <button onClick={() => switchTo(otherLocale)} aria-label={otherFlag}>
            <Image
              src={`/icons/${otherFlag}.svg`}
              alt={otherFlag}
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>
    </div>
  )
}
