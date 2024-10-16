import { MovingSkills } from '@/components/moving-skills'
import { NavBar } from '@/components/nav-bar'
import { Projects } from '@/components/projects'
import { SkillsGrid } from '@/components/skills-grid'
import { TechCard } from '@/components/tech-card'
import { Button } from '@/components/ui/button'
import { Download, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { CareerCards } from '@/components/career-cards'
import { TracingBeam } from '@/components/ui/tracing-beam'
import {
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiYoutube,
} from '@icons-pack/react-simple-icons'

export default function Page() {
  return (
    <main className="flex flex-col w-full relative overflow-x-hidden">
      <NavBar />
      <section
        id="home"
        className="flex w-full h-[720px] sm:h-[900px] items-center justify-center relative"
      >
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
            <TechCard number="01">
              <Image
                className="mx-auto my-auto"
                src="/techs/react.svg"
                alt="react"
                width={180}
                height={80}
              />
            </TechCard>
            <TechCard number="02">
              <Image
                className="mx-auto my-auto"
                src="/techs/nextjs.svg"
                alt="Next JS"
                width={180}
                height={80}
              />
            </TechCard>
            <TechCard number="03">
              <Image
                className="mx-auto my-auto"
                src="/techs/nodejs.svg"
                alt="Node.js"
                width={180}
                height={80}
              />
            </TechCard>
            <TechCard number="04">
              <Image
                className="mx-auto my-auto opacity-80"
                src="/techs/react-native.svg"
                alt="React Native"
                width={180}
                height={80}
              />
            </TechCard>
            <TechCard number="05">
              <Image
                className="mx-auto my-auto opacity-80"
                src="/techs/typescript.svg"
                alt="Typescript"
                width={180}
                height={80}
              />
            </TechCard>
            <TechCard number="06">
              <Image
                className="mx-auto my-auto opacity-80"
                src="/techs/mysql.svg"
                alt="MySQL"
                width={180}
                height={80}
              />
            </TechCard>
            <TechCard number="07">
              <Image
                className="mx-auto my-auto"
                src="/techs/tailwind.svg"
                alt="Tailwind"
                width={180}
                height={80}
              />
            </TechCard>
            <TechCard number="08">
              <Image
                className="mx-auto my-auto"
                src="/techs/nginx.svg"
                alt="Nginx"
                width={180}
                height={80}
              />
            </TechCard>
            <TechCard number="09">
              <Image
                className="mx-auto my-auto"
                src="/techs/prisma.svg"
                alt="Prisma"
                width={180}
                height={80}
              />
            </TechCard>
          </div>
        </div>
      </section>
      <section
        id="about"
        className="w-full flex flex-col items-center relative"
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
            <h1 className="text-h2 z-50">Sobre mim</h1>
            <p className="text-sm md:text-base opacity-80">
              Sou um programador e entusiasta da tecnologia, do marketing e
              empreendedorismo. Trabalhei nos últimos dois anos como
              programador, sendo o primeiro como Desenvolvedor Front-end e o
              segundo ampliando meu conhecimento como Desenvolvedor Full-stack.
              Atuei por mais de um ano em uma startup da minha cidade e hoje
              tenho trabalhado como freelancer, entregando ótimos resultados e
              me aprimorando todo dia. Minha especialidade inclui React, NextJS,
              Node, Typescript, React Native e SQL.
            </p>
            <p className="text-sm md:text-base opacity-80">
              Além do trabalho convencional, estou investindo também na criação
              de conteúdo da área tech no Instagram e YouTube, a fim de agregar
              valor na vida das pessoas e formar mais profissionais como eu.
            </p>
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-4 opacity-60">
                <Link
                  href="https://linkedin.com/in/joaorochame"
                  target="_blank"
                >
                  <SiLinkedin />
                </Link>
                <Link href="https://github.com/john0x01" target="_blank">
                  <SiGithub />
                </Link>
                <Link href="https://instagram.com/joaorocha.me" target="_blank">
                  <SiInstagram />
                </Link>
                <Link
                  href="https://www.youtube.com/@joaorochame"
                  target="_blank"
                >
                  <SiYoutube />
                </Link>
              </div>
              <a href={'/cv-joao-rocha.pdf'} download>
                <Button variant="ghost" className="gap-2">
                  <Download /> Baixar CV
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col items-center">
        <div className="flex w-full max-w-7xl flex-col p-4 gap-4 sm:gap-8 md:gap-16">
          <h1 className="text-h2">Carreira</h1>
          <div className="flex w-full gap-16">
            <TracingBeam className="flex gap-16">
              <CareerCards />
            </TracingBeam>
          </div>
        </div>
      </section>
      <section id="contact" className="w-full flex flex-col items-center">
        <div className="flex w-full max-w-7xl px-4 py-16 flex-col items-center">
          <div className="flex w-full max-w-[1080px] flex-col items-center gap-16 px-8 py-16 rounded-2xl border border-white/15 relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary-green to-primary-blue" />
            <header className="w-full flex flex-col items-center gap-8">
              <div className="flex items-center gap-2">
                <Image
                  src={'/pfp.jpg'}
                  width={64}
                  height={64}
                  className="rounded-full"
                  alt="João Rocha"
                />
                <span className="text-h4">João Rocha</span>
              </div>
              <ul className="flex gap-2">
                <li className="flex items-center gap-2 px-4 h-8 bg-white/5 rounded-full">
                  <span className="text-sm md:text-base opacity-60">
                    Front-end
                  </span>
                </li>
                <li className="flex items-center gap-2 px-4 h-8 bg-white/5 rounded-full">
                  <span className="text-sm md:text-base opacity-60">
                    Back-end
                  </span>
                </li>
                <li className="flex items-center gap-2 px-4 h-8 bg-white/5 rounded-full">
                  <span className="text-sm md:text-base opacity-60">
                    Mobile
                  </span>
                </li>
                <li className="flex items-center gap-2 px-4 h-8 bg-white/5 rounded-full">
                  <span className="text-sm md:text-base opacity-60">UI/UX</span>
                </li>
              </ul>
            </header>
            <p className="text-sm md:text-base opacity-80 text-center">
              Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
              rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur
              vel bibendum lorem. Morbi convallis convallis diam sit amet
              lacinia. Aliquam in elementum tellus.
            </p>
            <div className="flex flex-col gap-4 items-center">
              <Button>🔥 Quero te contratar agora</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
