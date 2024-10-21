import Image from 'next/image'
import Link from 'next/link'

export function FlagSelect({
  mobile = false,
  defaultFlag = 'brazil',
}: {
  mobile?: boolean
  defaultFlag?: 'brazil' | 'usa'
}) {
  if (mobile) {
    return (
      <div className="flex items-center gap-4">
        <Link href="/">
          <Image
            src={`/icons/brazil.svg`}
            alt="Brazil flag"
            width={32}
            height={32}
          />
        </Link>
        <Link href="/en">
          <Image src={`/icons/usa.svg`} alt="USA flag" width={32} height={32} />
        </Link>
      </div>
    )
  }

  return (
    <div className="hidden lg:block group relative ">
      <Image
        src={`/icons/${defaultFlag}.svg`}
        alt={defaultFlag}
        width={24}
        height={24}
      />
      <div className="absolute bottom-0 opacity-0 group-hover:-bottom-12 group-hover:opacity-100 transition-all duration-300">
        <div className="w-8 h-8 bg-secondary flex items-center justify-center rounded">
          <Link href={defaultFlag === 'brazil' ? '/en' : '/'}>
            <Image
              src={`/icons/${defaultFlag === 'brazil' ? 'usa' : 'brazil'}.svg`}
              alt={defaultFlag === 'brazil' ? 'usa' : 'brazil'}
              width={20}
              height={20}
            />
          </Link>
        </div>
      </div>
    </div>
  )
}
