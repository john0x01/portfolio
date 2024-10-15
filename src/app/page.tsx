import { MovingSkills } from '@/components/moving-skills'
import { NavBar } from '@/components/nav-bar'
import { Projects } from '@/components/projects'
import { SkillsGrid } from '@/components/skills-grid'
import { Button } from '@/components/ui/button'
import { Download, Star } from 'lucide-react'
import Image from 'next/image'

export default function Page() {
  return (
    <main className="flex flex-col w-full relative overflow-x-hidden">
      <NavBar />
      <section className="flex w-full h-[720px] sm:h-[900px] items-center justify-center relative">
        <div className="w-full max-w-[1080px] px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-6">
            <h1 className="text-h1">
              Contrate um desenvolvedor{' '}
              <span className="bg-gradient-to-r from-primary-green to-primary-blue text-transparent bg-clip-text">
                full-stack
              </span>
            </h1>
            <div className="flex items-center gap-4">
              <div className="w-[3px] h-12 bg-gradient-to-b from-primary-green to-primary-blue rounded-full" />
              <p className="md:text-lg opacity-80">
                Meu nome é João Rocha e eu posso ajudar sua empresa a lucrar
                mais com software.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a href={'/cv-joao-rocha.pdf'} download>
                <Button variant="ghost" className="gap-2">
                  <Download /> Baixar CV
                </Button>
              </a>
              <Button>🔥 Me contrate agora</Button>
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
                Em avaliações de diversos clientes
              </span>
            </div>
          </div>
        </div>
        <div className="absolute w-[670px] h-[670px] bg-primary-green blur-[150px] opacity-15 -z-10 -top-[335px]" />
      </section>
      <MovingSkills />
      <section
        className="flex flex-col gap-8 w-full items-center py-8 sm:py-16"
        id="projects"
      >
        <div className="flex w-full max-w-7xl px-4">
          <h1 className="text-h2">Meus Projetos</h1>
        </div>
        <Projects />
      </section>
      <section className="flex w-full flex-col items-center" id="skills">
        <div className="flex w-full max-w-7xl flex-col gap-16 items-center px-4 py-8 sm:py-16">
          <h1 className="text-h2">Minhas Skills</h1>
          <SkillsGrid />
          <h2 className="text-h3 mr-auto">Principais tecnologias</h2>
          <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-16 ">
            <div className="flex flex-col gap-8 p-4 border-t">
              <span className="text-sm opacity-60">01</span>
              <Image
                className="mx-auto my-auto"
                src="/techs/react.svg"
                alt="react"
                width={180}
                height={80}
              />
            </div>
            <div className="flex flex-col gap-8 p-4 border-t">
              <span className="text-sm opacity-60">02</span>
              <Image
                className="mx-auto my-auto"
                src="/techs/nextjs.svg"
                alt="Next JS"
                width={180}
                height={80}
              />
            </div>
            <div className="flex flex-col gap-8 p-4 border-t">
              <span className="text-sm opacity-60">03</span>
              <Image
                className="mx-auto my-auto"
                src="/techs/nodejs.svg"
                alt="Node.js"
                width={180}
                height={80}
              />
            </div>
            <div className="flex flex-col gap-8 p-4 border-t">
              <span className="text-sm opacity-60">04</span>
              <Image
                className="mx-auto my-auto opacity-80"
                src="/techs/react-native.svg"
                alt="React Native"
                width={180}
                height={80}
              />
            </div>
            <div className="flex flex-col gap-8 p-4 border-t">
              <span className="text-sm opacity-60">05</span>
            </div>
            <div className="flex flex-col gap-8 p-4 border-t">
              <span className="text-sm opacity-60">06</span>
            </div>
            <div className="flex flex-col gap-8 p-4 border-t">
              <span className="text-sm opacity-60">07</span>
            </div>
            <div className="flex flex-col gap-8 p-4 border-t">
              <span className="text-sm opacity-60">08</span>
            </div>
            <div className="flex flex-col gap-8 p-4 border-t">
              <span className="text-sm opacity-60">09</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
