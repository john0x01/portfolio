'use client'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useState } from 'react'

interface CareerCardProps {
  title: string
  description: string
  info: string
  responsibilities: string[]
}
function CareerCard({
  title,
  description,
  responsibilities,
  info,
}: CareerCardProps) {
  return (
    <div className="w-full grid grid-cols-2 gap-16 px-8 py-16">
      <div className="flex flex-col gap-8">
        <header className="flex flex-col gap-4">
          <h1 className="text-h4">{title}</h1>
          <span className="md:text-lg font-bold opacity-60">{info}</span>
        </header>
        <ul className="flex w-full flex-wrap gap-2">
          {responsibilities.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 px-4 py-[2px] bg-[#090909] rounded-full"
            >
              <Check className="text-primary-blue" />
              <span className="text-sm md:text-base opacity-60">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <p className="text-sm md:text-base opacity-80">{description}</p>
    </div>
  )
}

export function CareerCards() {
  const [hoveredIndex, setHoveredIndex] = useState(0)

  return (
    <div className="flex w-full flex-col gap-4">
      {cards.map((card, idx) => (
        <motion.div
          onMouseEnter={() => setHoveredIndex(idx)}
          key={'card' + idx}
          className="w-full border border-white/15 rounded-2xl relative overflow-hidden"
        >
          <motion.div
            initial={{
              bottom: 0,
              top: 0,
              opacity: 0,
              width: 1,
              position: 'absolute',
            }}
            animate={{
              opacity: hoveredIndex === idx ? 1 : 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="bg-gradient-to-r from-primary-green to-primary-blue"
          />
          <CareerCard
            key={card.title}
            title={card.title}
            info={card.info}
            responsibilities={card.responsibilities}
            description={card.description}
            // hovered={cards.indexOf(card) === hoveredIndex}
          />
        </motion.div>
      ))}
    </div>
  )
}

const cards = [
  {
    title: 'Desenvolvedor Mobile',
    info: '📅 Julho 2024 - Presente • Grupo Sideral',
    responsibilities: [
      'Desenvolvimento Mobile',
      'React Native',
      'APIs',
      'Armazenamento off-line',
    ],
    description: `Responsável pelo desenvolvimento mobile do SaaS "Central Caverna", app de produtividade voltado ao desenvolvimento pessoal. Principais funcionalidades: Cadastro de checklists, lembretes, tarefas, compromissos, integração com calendário e API, armazenamento off-line e salvamento de autenticação.
Stacks utilizadas: React Native, Expo, React Hook Forms, Tamagui, React Native Reanimated, MMKV`,
  },
  {
    title: 'Desenvolvedor Full-stack',
    info: '📅 Abril 2024 - Presente • Freelance',
    responsibilities: [
      'Aplicações Completas',
      'SaaS',
      'Aplicativos',
      'Landing Pages',
    ],
    description: `Realizei projetos de SaaS e Landing Pages com NextJs e Aplicativos Mobile para diversos clientes, sendo em vezes responsável pelo UI/UX, outras vezes pela integração com o sistema existente e outras vezes por todas as etapas até o deploy.
Stacks utilizadas: ReactJS, Node.js, NextJs, React Native, Tailwind, SQL, AWS, Nginx, NoSQL`,
  },
  {
    title: 'Desenvolvedor Mobile',
    info: '📅 Agosto 2024 - Outubro 2023 • Solus Sistema',
    responsibilities: ['Desenvolvimento Mobile', 'UI/UX', 'APIs'],
    description: `Responsável pelo UI e desenvolvimento do applicativo ”Solus Laudos”, app voltado ao nicho do agronegócio.
Principais funcionalidades: Emissão de laudos sobre plantações, safras e colheitas, cadastro, edição e exclusão off-line de dados, salvamento de imagens e sincronização com API.
Stacks utilizadas: React Native, Expo, React Hook Forms, Tamagui, React Native Reanimated, MMKV`,
  },
  {
    title: 'Desenvolvedor Full-stack Jr.',
    info: '📅 Março 2023 - Abril 2024 • SmartNew Sistemas',
    responsibilities: [
      'Desenvolvimento Web',
      'Desenvolvimento Mobile',
      'UI/UX',
      'DevOps',
    ],
    description: `Responsável pelo desenvolvimento de telas, dashboards, APIs integrando o SaaS da empresa
Responsável pelo design e desenvolvimento de dois aplicativos mobile, sendo um para uso interno e outro sob demanda para outra empresa.
Stacks utilizadas: ReactJS, Node.js, NextJs, React Native, Tailwind, SQL, Nginx, Python, Flask`,
  },
  {
    title: 'Desenvolvedor Frontend',
    info: '📅 Dezembro 2022 - Março 2023 • Freelance',
    responsibilities: ['Sites em WordPress', 'UIs no Figma', 'HTML', 'React'],
    description: `Realizei projetos e páginas com HTML, CSS, JS e ReactJS`,
  },
]
