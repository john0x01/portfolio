import { Projects } from '@/components/projects'
import { Animate } from '@/components/ui/animate'
import { useTranslations } from 'next-intl'

export function ProjectsSection() {
  const t = useTranslations('projects')
  return (
    <section
      className="flex w-full justify-center py-8 sm:py-16 overflow-y-hidden"
      id="projects"
    >
      <div className="flex flex-col gap-8 w-full max-w-7xl px-4">
        <Animate direction="right">
          <h1 className="text-h2">{t('title')}</h1>
        </Animate>
        <Projects />
      </div>
    </section>
  )
}
