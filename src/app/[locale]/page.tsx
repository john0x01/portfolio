import { MovingSkills } from '@/components/moving-skills'
import { NavBar } from '@/components/nav-bar'
import { ContactSection } from '@/components/sections/contact'
import { HomeSection } from '@/components/sections/home'
import { setRequestLocale } from 'next-intl/server'

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <main className="flex flex-col w-full relative overflow-x-hidden">
      <NavBar />
      <HomeSection />
      <MovingSkills />
      {/* <ProjectsSection /> */}
      {/* <SkillsSection /> */}
      {/* <AboutSection /> */}
      {/* <CareerSection /> */}
      <ContactSection />
    </main>
  )
}
