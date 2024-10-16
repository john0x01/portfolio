import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'João Rocha | Desenvolvedor Full-stack',
  description:
    'Contrate um desenvolvedor full-stack para seu projeto. Portfólio Online',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html>
      <body className={inter.className}>
        {children}
        <Toaster richColors />
      </body>
    </html>
  )
}
