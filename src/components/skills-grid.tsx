import { SiReact, SiVercel } from '@icons-pack/react-simple-icons'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { Button } from './ui/button'

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
const Skeleton = () => (
  <div className="flex w-full min-h-40 rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800"></div>
)
const items = [
  {
    title: 'Desenvolvimento Web',
    description:
      'Sou especialista em desenvolvimento web, criando aplicações interativas e responsivas. Utilizo React.js e Next.js para desenvolver interfaces modernas, proporcionando experiências fluidas e intuitivas, com foco em acessibilidade e desempenho.',
    header: (
      <div className="flex w-full min-h-40 relative">
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
    header: <Skeleton />,
  },
  {
    title: 'APIs e RESTful',
    description:
      'Tenho forte entendimento na construção de APIs RESTful, permitindo comunicação eficiente entre sistemas. Utilizo Node.js e Express para criar APIs escaláveis, assegurando segurança e eficiência nas interações de dados.',
    header: <Skeleton />,
  },
  {
    title: 'Design de UI/UX',
    description:
      'Minha abordagem em design de UI/UX foca na criação de interfaces que não apenas encantam visualmente, mas também oferecem uma experiência de usuário intuitiva. Com habilidades fortes em prototipagem e wireframing no Figma, sou capaz de transformar requisitos em soluções visuais eficazes, garantindo que cada elemento do design contribua para a usabilidade e acessibilidade.',
    header: <Skeleton />,
  },
  {
    title: 'Banco de Dados',
    description:
      'Possuo experiência em gerenciamento de dados, utilizando bancos de dados relacionais SQL e NoSQL. Estou familiarizado com modelagem e otimização de consultas, garantindo eficiência no armazenamento e recuperação de informações.',
    header: <Skeleton />,
  },
  {
    title: 'DevOps',
    description:
      'Minha experiência em DevOps envolve automatizar o desenvolvimento e entrega de software. Utilizo serviços da AWS e servidores Nginx para implementar soluções de hospedagem e integração contínua, garantindo agilidade na entrega.',
    header: <Skeleton />,
  },
  {
    title: 'Desenvolvimento Full-stack',
    description:
      'Como desenvolvedor full-stack, atuo em todas as camadas do desenvolvimento, do front-end ao back-end. Minha proficiência em React, Node.js, Next.js e React Native me permite criar soluções completas que oferecem experiências coesas e facilitam a manutenção.',
    header: <Skeleton />,
  },
]
