import {
  SiAmazonwebservices,
  SiDigitalocean,
  SiDocker,
  SiFigma,
  SiGithub,
  SiNginx,
  SiReact,
  SiVercel,
} from '@icons-pack/react-simple-icons'
import { Globe } from 'lucide-react'
import Image from 'next/image'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { Button } from './ui/button'
import { Card } from './ui/card'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'

export function SkillsGrid() {
  return (
    <BentoGrid className="w-full">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={i === 6 ? 'md:col-span-2' : i === 3 ? 'lg:col-span-2' : ''}
        />
      ))}
    </BentoGrid>
  )
}

const devOpsSkills = [
  {
    name: 'Docker',
    icon: SiDocker,
    color: '#2496ED',
  },
  {
    name: 'GitHub',
    icon: SiGithub,
    color: '#181717',
  },
  {
    name: 'AWS',
    icon: SiAmazonwebservices,
    color: '#85ff0b',
  },
  {
    name: 'Vercel',
    icon: SiVercel,
    color: '#000000',
  },
  {
    name: 'DigitalOcean',
    icon: SiDigitalocean,
    color: '#0080FF',
  },
  {
    name: 'Nginx',
    icon: SiNginx,
    color: '#009639',
  },
]

const items = [
  {
    title: 'Desenvolvimento Web',
    description:
      'Sou especialista em desenvolvimento web, criando aplicações interativas e responsivas. Utilizo React.js e Next.js para desenvolver interfaces modernas, proporcionando experiências fluidas e intuitivas, com foco em acessibilidade e desempenho.',
    header: (
      <div className="flex w-full min-h-40 relative bg-dot">
        <div className="absolute bottom-1 right-1/2 left-1/2 -translate-x-1/2 group-hover/bento:-translate-y-2 transition-all duration-200 h-36 aspect-video bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-xl border border-b-0 rounded-b-none overflow-hidden">
          <div className="w-full flex items-center gap-1 bg-neutral-700 p-1 px-2">
            <div className="bg-red-500 h-1 w-1 rounded-full" />
            <div className="bg-yellow-500 h-1 w-1 rounded-full" />
            <div className="bg-green-500 h-1 w-1 rounded-full" />
          </div>
          <div className="flex flex-col gap-2 w-1/2 mx-auto h-full items-center justify-center">
            <h1 className="text-xs font-bold text-center">
              Aplicações web que se{' '}
              <span className="bg-gradient-to-r from-primary-green to-primary-blue text-transparent bg-clip-text">
                destacam
              </span>
            </h1>
            <div className="flex items-center gap-2">
              <Button
                variant="secondary"
                className="h-auto py-[2px] px-2 text-[0.5rem] rounded bg-violet-700"
              >
                Conhecer
              </Button>
              <Button
                variant="outline"
                className="h-auto py-[2px] px-2 text-[0.5rem] rounded"
              >
                Ver mais
              </Button>
            </div>
          </div>
        </div>
        <div className="w-8 h-8 bg-black rounded-full absolute bottom-4 left-[10%] group-hover/bento:rotate-[5deg] group-hover/bento:translate-x-[5px] transition-all duration-200">
          <SiVercel size={16} className="m-auto" />
        </div>
        <SiReact
          size={32}
          className="absolute text-blue-400 top-4 right-[10%] group-hover/bento:rotate-[5deg] group-hover/bento:-translate-x-[5px] transition-all duration-200"
        />
      </div>
    ),
  },
  {
    title: 'Desenvolvimento Mobile',
    description:
      'Com experiência em desenvolvimento mobile, crio aplicativos robustos com React Native. Utilizando React Native e Expo, desenvolvo interfaces fluidas e de alta performance para Android e iOS.',
    header: (
      <div className="flex w-full min-h-40 relative bg-dot">
        <div className="flex w-full flex-col gap-4 mx-8">
          <div className="flex w-full gap-2 items-center border rounded-full py-1 px-2 group-hover/bento:rotate-[5deg] group-hover/bento:-translate-x-[5px] transition-all duration-200">
            <div className="bg-gradient-to-tr from-primary-green to-primary-blue w-8 h-8 rounded-full" />
            <div className="flex w-full h-6 rounded-full bg-border"></div>
          </div>
          <div className="flex w-3/4 ml-auto gap-2 items-center border rounded-full py-1 px-2 group-hover/bento:rotate-[-5deg] group-hover/bento:-translate-x-[5px] transition-all duration-200">
            <div className="flex w-full h-6 rounded-full bg-border"></div>
            <div className="bg-gradient-to-tr from-primary-green to-primary-blue w-8 h-8 rounded-full" />
          </div>
          <div className="flex w-[85%] gap-2 items-center border rounded-full py-1 px-2 group-hover/bento:rotate-[5deg] group-hover/bento:-translate-x-[5px] transition-all duration-200">
            <div className="bg-gradient-to-tr from-primary-green to-primary-blue w-8 h-8 rounded-full" />
            <div className="flex w-full h-6 rounded-full bg-border"></div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'APIs e RESTful',
    description:
      'Tenho forte entendimento na construção de APIs RESTful, permitindo comunicação eficiente entre sistemas. Utilizo Node.js e Express para criar APIs escaláveis, assegurando segurança e eficiência nas interações de dados.',
    header: (
      <div className="flex flex-col justify-center gap-2 w-full min-h-40 relative overflow-hidden bg-dot">
        <div className="flex items-center w-[55%] translate-x-[-110%] group-hover/bento:translate-x-0 transition-all duration-[800ms] border rounded-full py-1 px-2 bg-background">
          <span className="text-xs opacity-80">GraphQL</span>
        </div>
        <div className="flex items-center w-[65%] translate-x-[-110%] group-hover/bento:translate-x-0 transition-all duration-[900ms] border rounded-full py-1 px-2 bg-background">
          <span className="text-xs opacity-80">Express</span>
        </div>
        <div className="flex items-center w-[45%] translate-x-[-110%] group-hover/bento:translate-x-0 transition-all duration-700 border rounded-full py-1 px-2 bg-background">
          <span className="text-xs opacity-80">Web Sockets</span>
        </div>
        <div className="flex items-center w-[70%] translate-x-[-110%] group-hover/bento:translate-x-0 transition-all duration-1000 border rounded-full py-1 px-2 bg-background">
          <span className="text-xs opacity-80">Design Patterns</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Design de UI/UX',
    description:
      'Minha abordagem em design de UI/UX foca na criação de interfaces que não apenas encantam visualmente, mas também oferecem uma experiência de usuário intuitiva. Com habilidades fortes em prototipagem e wireframing no Figma, sou capaz de transformar requisitos em soluções visuais eficazes, garantindo que cada elemento do design contribua para a usabilidade e acessibilidade.',
    header: (
      <div className="flex items-end justify-center w-full gap-6 min-h-40 relative overflow-hidden bg-dot">
        <div className="relative group-hover/bento:translate-y-2 transition-all duration-200 h-36 aspect-[12/16] bg-white rounded-xl border-2 border-zinc-500 border-b-0 rounded-b-none overflow-visible">
          <div className="absolute top-2 left-8 right-8 h-3 rounded-full bg-zinc-200 group-hover/bento:left-2 group-hover/bento:right-2 transition-all duration-300" />
          <div className="flex flex-col gap-2 w-1/2 mx-auto h-full items-center justify-center p-2">
            <h1 className="text-zinc-900 text-[10px] font-bold text-center">
              Landing Pages que convertem
            </h1>
            <div className="flex items-center gap-2">
              <Button
                variant="secondary"
                className="h-auto py-[2px] px-2 text-[0.5rem] rounded"
              >
                Comprar Agora
              </Button>
            </div>
          </div>
          <div className="absolute flex items-center justify-center right-0 top-0 translate-x-1/2 -translate-y-1/2 bg-neutral-700 z-10 border h-8 w-8 rounded-full">
            <Globe size={16} />
          </div>
        </div>
        <div className="relative group-hover/bento:translate-x-2 transition-all duration-200 h-36 aspect-video bg-neutral-200 rounded-xl border border-b-0 rounded-b-none overflow-visible">
          <div className="w-full flex items-center gap-1 bg-neutral-500 p-1 px-2 rounded-t-2xl">
            <div className="bg-neutral-400 h-1 w-1 rounded-full" />
            <div className="bg-neutral-400 h-1 w-1 rounded-full" />
            <div className="bg-neutral-400 h-1 w-1 rounded-full" />
          </div>
          <div className="absolute flex items-center justify-center right-0 top-0 translate-x-1/2 -translate-y-1/2 bg-neutral-700 z-10 border h-8 w-8 rounded-full group-hover/bento:rotate-[-15deg] group-hover/bento:-translate-x-0 group-hover/bento:translate-y-0 transition-all duration-200">
            <SiFigma size={16} />
          </div>
          <div className="flex flex-col gap-2 w-2/3 mx-auto h-full items-center justify-center">
            <h1 className="text-black text-xs font-bold text-center">
              Wireframing, Prototipação e Experiência de Usuário
            </h1>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Banco de Dados',
    description:
      'Possuo experiência em gerenciamento de dados, utilizando bancos de dados relacionais SQL e NoSQL. Estou familiarizado com modelagem e otimização de consultas, garantindo eficiência no armazenamento e recuperação de informações.',
    header: (
      <div className="flex flex-col gap-4 w-full min-h-40 relative bg-dot px-[12%]">
        <Card className="flex gap-4 p-2 mr-auto group-hover/bento:rotate-[5deg] group-hover/bento:translate-x-2 group-hover/bento:-translate-y-0 rounded-2xl transition-all duration-200">
          <Image
            src={'/pfp.jpg'}
            alt="João Rocha"
            height={48}
            width={48}
            className="rounded-full min-w-12 scale-75 lg:scale-100"
          />
          <span className="text-xs font-bold opacity-60">
            SELECT * FROM Transactions JOIN Users ON Transactions.UserID =
            User.ID
          </span>
        </Card>
        <Card className="flex items-center justify-end gap-4 p-1 pl-4 w-full max-w-[80%] ml-auto group-hover/bento:rotate-[-5deg] group-hover/bento:-translate-x-2 group-hover/bento:-translate-y-0 rounded-2xl transition-all duration-200">
          <div className="flex items-center gap-2">
            <div className="rounded-full inline-block w-2 h-2 bg-white/60 group-hover/bento:animate-bounce duration-100" />
            <div className="rounded-full inline-block w-2 h-2 bg-white/60 group-hover/bento:animate-bounce" />
            <div className="rounded-full inline-block w-2 h-2 bg-white/60 group-hover/bento:animate-bounce" />
          </div>
          <div className="rounded-full inline-block min-w-12 min-h-12 bg-gradient-to-r from-primary-green to-primary-blue scale-75 lg:scale-100" />
        </Card>
      </div>
    ),
  },
  {
    title: 'DevOps',
    description:
      'Minha experiência em DevOps envolve automatizar o desenvolvimento e entrega de software. Utilizo serviços da AWS e servidores Nginx para implementar soluções de hospedagem e integração contínua, garantindo agilidade na entrega.',
    header: (
      <div className="flex w-full min-h-40 relative overflow-hidden bg-dot">
        <InfiniteMovingCards
          scrollerClassName="[animation-play-state:paused] group-hover/bento:[animation-play-state:running]"
          items={devOpsSkills.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={item.name + idx}
                className="flex items-center gap-2 h-8 px-4 bg-[#232323] rounded-full"
              >
                <Icon size={14} fill={item.color} />
                <span className="text-xs sm:text-sm md:text-base opacity-60">
                  {item.name}
                </span>
              </div>
            )
          })}
        />
        <div className="w-12 h-12 rounded-full bg-primary-green absolute left-1/2 right-1/2 -translate-x-1/2 bottom-8 blur-2xl" />
        <div className="absolute bottom-0 right-1/2 left-1/2 -translate-x-1/2 h-24 aspect-video bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-xl border border-b-0 rounded-b-none overflow-hidden">
          <div className="w-full flex items-center gap-1 bg-neutral-700 p-1 px-2">
            <div className="bg-red-500 h-1 w-1 rounded-full" />
            <div className="bg-yellow-500 h-1 w-1 rounded-full" />
            <div className="bg-green-500 h-1 w-1 rounded-full" />
          </div>
          <div className="flex flex-col gap-2 w-1/2 mx-auto h-full items-center justify-center"></div>
        </div>
      </div>
    ),
  },
  {
    title: 'Desenvolvimento Full-stack',
    description:
      'Como desenvolvedor full-stack, atuo em todas as camadas do desenvolvimento, do front-end ao back-end. Minha proficiência em React, Node.js, Next.js e React Native me permite criar soluções completas que oferecem experiências coesas e facilitam a manutenção.',
    header: (
      <div className="grid grid-cols-3 gap-4 w-full min-h-40 relative bg-dot px-[12%]">
        <Card className="bg-background rotate-[-5deg] translate-x-4 -translate-y-1 group-hover/bento:rotate-0 group-hover/bento:-translate-x-4 group-hover/bento:-translate-y-0 rounded-xl transition-all duration-200">
          <div className="flex flex-col gap-4 p-6 items-center w-full">
            <Image
              src={'/pfp.jpg'}
              alt="Profile picture"
              height={48}
              width={48}
              className="rounded-full scale-75 lg:scale-100"
            />
            <span className="text-center text-xs md:text-sm font-bold opacity-60">
              APIs funcionais e Banco de dados
            </span>
            <div className="flex items-center justify-center border border-red-600 py-[2px] px-2 rounded-full">
              <span className="text-[10px] font-bold text-red-600">
                Back-end
              </span>
            </div>
          </div>
        </Card>
        <Card className="bg-background z-10 rounded-xl transition-all duration-200`">
          <div className="flex flex-col gap-4 p-6 items-center w-full">
            <Image
              src={'/pfp.jpg'}
              alt="Profile picture"
              height={48}
              width={48}
              className="rounded-full scale-75 lg:scale-100"
            />
            <span className="text-center text-xs md:text-sm font-bold opacity-60">
              Interface e Design Atrativos
            </span>
            <div className="flex items-center justify-center border border-green-600 py-[2px] px-2 rounded-full">
              <span className="text-[10px] font-bold text-green-600">
                Front-end
              </span>
            </div>
          </div>
        </Card>
        <Card className="bg-background rotate-[5deg] -translate-x-4 -translate-y-1 group-hover/bento:rotate-0 group-hover/bento:translate-x-4 group-hover/bento:-translate-y-0 rounded-xl transition-all duration-200`">
          <div className="flex flex-col gap-4 p-6 items-center w-full">
            <Image
              src={'/pfp.jpg'}
              alt="Profile picture"
              height={48}
              width={48}
              className="rounded-full scale-75 lg:scale-100"
            />
            <span className="text-center text-xs md:text-sm font-bold opacity-60">
              Deploy e Monitoramento
            </span>
            <div className="flex items-center justify-center border border-yellow-600 py-[2px] px-2 rounded-full">
              <span className="text-[10px] font-bold text-yellow-600">
                DevOps
              </span>
            </div>
          </div>
        </Card>
      </div>
    ),
  },
]
