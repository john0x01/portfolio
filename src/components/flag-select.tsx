import Image from 'next/image'

export function FlagSelect() {
  const defaultFlag = 'brazil'
  return (
    <Image
      src={`/icons/${defaultFlag}.svg`}
      alt={defaultFlag}
      width={32}
      height={32}
      className="hidden lg:block"
    />
  )
}
