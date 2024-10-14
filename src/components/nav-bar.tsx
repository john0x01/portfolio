import Image from 'next/image'
import { Button } from './ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'

export function NavBar() {
  return (
    <nav className="hidden md:flex fixed left-0 right-0 justify-center px-4 py-6 bg-gradient-to-t from-background/0 via-background to-background z-10">
      <div className="w-full max-w-7xl flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src={'/pfp.jpg'}
            alt="Profile picture"
            height={64}
            width={64}
            className="rounded-full "
          />
          <span className="font-bold md:text-lg opacity-80">JOÃO ROCHA</span>
        </div>
        <ul className="flex items-center gap-6">
          <li className="opacity-60">
            <a href="#">Home</a>
          </li>
          <li className="opacity-60">Projetos</li>
          <li className="opacity-60">Skills</li>
          <li className="opacity-60">Sobre</li>
          <li className="opacity-60">Contato</li>
        </ul>
        <div className="flex items-center gap-2">
          <Select defaultValue="ptBR">
            <SelectTrigger className="gap-4 border-0 opacity-60">
              <SelectValue defaultValue="ptBR" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ptBR" defaultChecked>
                PT-BR
              </SelectItem>
              <SelectItem value="enUS">EN-US</SelectItem>
            </SelectContent>
          </Select>
          <Button>🔥 Me contrate agora</Button>
        </div>
      </div>
    </nav>
  )
}
