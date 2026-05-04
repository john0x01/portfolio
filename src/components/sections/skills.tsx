import { SkillsGrid } from '@/components/skills-grid'
import { TechCard } from '@/components/tech-card'
import { Animate } from '@/components/ui/animate'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

const techs = [
  { src: '/techs/react.svg', alt: 'react', dim: false },
  { src: '/techs/nextjs.svg', alt: 'Next JS', dim: false },
  { src: '/techs/nodejs.svg', alt: 'Node.js', dim: false },
  { src: '/techs/react-native.svg', alt: 'React Native', dim: true },
  { src: '/techs/typescript.svg', alt: 'Typescript', dim: true },
  { src: '/techs/mysql.svg', alt: 'MySQL', dim: true },
  { src: '/techs/tailwind.svg', alt: 'Tailwind', dim: false },
  { src: '/techs/nginx.svg', alt: 'Nginx', dim: false },
  { src: '/techs/prisma.svg', alt: 'Prisma', dim: false },
]

export function SkillsSection() {
  const t = useTranslations('skills')
  return (
    <section
      className="flex w-full flex-col items-center overflow-y-hidden"
      id="skills"
    >
      <div className="flex w-full max-w-7xl flex-col gap-16 items-center px-4 py-8 sm:py-16">
        <Animate>
          <h1 className="text-h2">{t('title')}</h1>
        </Animate>
        <SkillsGrid />
        <Animate direction="right" className="mr-auto">
          <h2 className="text-h3">{t('mainTechs')}</h2>
        </Animate>
        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-16 ">
          {techs.map((tech, idx) => {
            const number = String(idx + 1).padStart(2, '0')
            const delay = (idx % 3) * 0.25
            return (
              <Animate key={tech.alt} fromY={40} duration={0.25} delay={delay}>
                <TechCard number={number}>
                  <Image
                    className={`mx-auto my-auto${tech.dim ? ' opacity-80' : ''}`}
                    src={tech.src}
                    alt={tech.alt}
                    width={180}
                    height={80}
                  />
                </TechCard>
              </Animate>
            )
          })}
        </div>
      </div>
    </section>
  )
}
