import { MovingSkills } from '@/components/moving-skills'
import { NavBar } from '@/components/nav-bar'
import { Button } from '@/components/ui/button'
import { Download, Star } from 'lucide-react'

export default function Page() {
  return (
    <main className="flex flex-col w-full relative">
      <NavBar />
      <section className="flex w-full h-[900px] items-center justify-center relative">
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
              <Button variant="ghost" className="gap-2">
                <Download /> Baixar CV
              </Button>
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
    </main>
  )
}
