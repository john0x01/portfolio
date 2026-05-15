import { SiGithub } from '@icons-pack/react-simple-icons'
import { Linkedin } from 'lucide-react'
import { setRequestLocale } from 'next-intl/server'
import Image from 'next/image'
import Link from 'next/link'

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <main>
      <div className="flex flex-col gap-6 max-w-xl">
        <Image
          src={'/pfp.jpeg'}
          height={60}
          width={60}
          alt="Profile picture"
          className="rounded-full"
        />
        <h1 className="text-5xl font-bold tracking-tight"> Software Engineer. Building cool stuff.</h1>
        <div>
          <p>
            Hey, I'm João. I'm a full-stack developer working with the
            JavaScript/TypeScript ecosystem. Currently working as a Front-end &
            Mobile Tech Lead @ a fintech.
          </p>
          <p className="mt-4">
            I write about architecture, React Native, NextJS and
            build-in-public.
          </p>
        </div>
        <div className='flex items-center gap-2'>
          <Link target='_blank' href='https://github.com/john0x01' className='animate-all duration-150 hover:scale-110 hover:-translate-y-1'>
            <SiGithub />
          </Link>
          <Link target='_blank' href='https://linkedin.com/in/joaorochame' className='animate-all duration-150 hover:scale-110 hover:-translate-y-1'>
            <Linkedin fill='hsl(var(--foreground))' />
          </Link>
        </div>
      </div>
    </main>
  )
}
