'use client'
import { Card, Carousel } from '@/components/ui/apple-cards-carousel'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'

export function Projects() {
  function getCards(cards: typeof data) {
    return cards.map((card, index) => (
      <Card key={card.src} card={card} index={index} href={card.href} layout />
    ))
  }

  return (
    <Tabs defaultValue="featured" className="w-full flex flex-col items-center">
      <TabsContent className="w-full" value="featured">
        <Carousel
          items={getCards(
            data.filter((item) => item.tags.includes('featured')),
          )}
        />
      </TabsContent>
      <TabsContent className="w-full" value="saas">
        <Carousel
          items={getCards(data.filter((item) => item.tags.includes('saas')))}
        />
      </TabsContent>
      <TabsContent className="w-full" value="apps">
        <Carousel
          items={getCards(data.filter((item) => item.tags.includes('apps')))}
        />
      </TabsContent>
      <TabsContent className="w-full" value="landing pages">
        <Carousel
          items={getCards(
            data.filter((item) => item.tags.includes('landing pages')),
          )}
        />
      </TabsContent>
      <TabsList className="w-full max-w-7xl px-4 py-8 bg-transparent mt-10">
        <TabsTrigger
          className="w-full rounded-full data-[state=active]:bg-[#131313] text-sm sm:md-base"
          value="featured"
        >
          Destaque
        </TabsTrigger>
        <TabsTrigger
          className="w-full rounded-full data-[state=active]:bg-[#131313] text-sm sm:md-base"
          value="saas"
        >
          SaaS
        </TabsTrigger>
        <TabsTrigger
          className="w-full rounded-full data-[state=active]:bg-[#131313] text-sm sm:md-base"
          value="apps"
        >
          Aplicativos
        </TabsTrigger>
        <TabsTrigger
          className="w-full rounded-full data-[state=active]:bg-[#131313] text-sm sm:md-base"
          value="landing pages"
        >
          Landing Pages
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}

const data = [
  {
    category: 'SaaS',
    title: 'Corelli Landing Page + Dashboard',
    src: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['featured', 'saas', 'landing pages'],
    href: '/projects/corelli',
  },
  {
    category: 'Aplicativo',
    title: 'Central Caverna',
    src: 'https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['featured', 'apps'],
    href: '/projects/central-caverna',
  },
  {
    category: 'SaaS',
    title: 'Launching the new Apple Vision Pro.',
    src: 'https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['featured', 'saas'],
    href: '/',
  },

  {
    category: 'Aplicativo',
    title: 'App Solus Sistema',
    src: 'https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['featured', 'apps'],
    href: '/projects/solus-sistema',
  },
  {
    category: '',
    title: 'Photography just got better.',
    src: 'https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['featured', 'landing pages'],
    href: '/',
  },
  {
    category: 'Hiring',
    title: 'Hiring for a Staff Software Engineer',
    src: 'https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['featured', 'apps'],
    href: '/',
  },
]
