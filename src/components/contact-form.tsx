'use client'
import { cellphoneMask } from '@/lib/utils'
import * as formSpree from '@formspree/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { PropsWithChildren, useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import { Button } from './ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'

const formSchema = z.object({
  name: z.string({ required_error: 'Obrigatório' }),
  cellphone: z
    .string({ required_error: 'Obrigatório' })
    .regex(/^\([1-9]{2}\) (?:[2-8]|9[0-9])[0-9]{3}-[0-9]{4}$/, {
      message: 'Número inválido',
    }),
  email: z
    .string({ required_error: 'Obrigatório' })
    .regex(
      /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
      'Por favor, insira um e-mail válido',
    ),
  message: z.string({ required_error: 'Obrigatório' }),
})

type FormData = z.infer<typeof formSchema>

export function ContactForm() {
  const [phase, setPhase] = useState(0)
  const [state, submitToForm] = formSpree.useForm('xkgnnpwy')
  const form = useForm<FormData>({ resolver: zodResolver(formSchema) })
  const {
    handleSubmit,
    watch,
    register,
    setValue,
    formState: { errors },
  } = form

  const name = watch('name')
  const cellphone = watch('cellphone')
  const email = watch('email')
  const message = watch('message')

  async function handleSubmitData(data: FormData) {
    submitToForm(data).catch(() =>
      toast.error('Não foi possível enviar os dados do formulário'),
    )
  }

  useEffect(() => {
    if (state.succeeded) {
      setPhase(1)
    }
    if (state.errors) {
      toast.error('Não foi possível enviar os dados do formulário')
    }
  }, [state])

  return (
    <DialogContent className="max-w-4xl pt-8">
      <motion.div
        initial={{
          right: '50%',
        }}
        animate={{
          right: phase === 1 ? 0 : '50%',
        }}
        transition={{
          duration: 0.8,
        }}
        className="absolute left-0 top-0 bg-gradient-to-r from-primary-green to-primary-blue h-1"
      />

      {phase === 1 && (
        <motion.div
          initial={{
            opacity: 0,
            y: 100,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="absolute left-0 right-0 top-0 bottom-0 flex flex-col items-center justify-center gap-4"
        >
          <CheckCircle size={48} className="text-primary-green" />
          <h1 className="text-h4">Tudo Certo</h1>
          <span>Você já pode fechar essa tela</span>
        </motion.div>
      )}
      <FormProvider {...form}>
        {phase === 0 ? (
          <DialogHeader>
            <DialogTitle>Pedido para trabalhar com João Rocha</DialogTitle>
            <DialogDescription>
              João receberá sua mensagem e entrará em contato
            </DialogDescription>
          </DialogHeader>
        ) : (
          <DialogHeader>
            <DialogTitle>Mensagem enviada com sucesso</DialogTitle>
            <DialogDescription>
              Em breve João lerá sua mensagem e entrará em contato
            </DialogDescription>
          </DialogHeader>
        )}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${phase === 1 && 'invisible'}`}
        >
          <div className="flex flex-col gap-3">
            <Label htmlFor="name">Nome</Label>
            <Input
              placeholder="Escreva seu nome..."
              autoFocus
              {...register('name')}
            />
            {errors.name && (
              <span className="text-xs opacity-80 text-red-300">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <Label htmlFor="cellphone">Celular</Label>
            <Input
              placeholder="(11) 99999-8888"
              {...register('cellphone')}
              onChange={(e) => {
                const value = e.target.value
                const formatted = cellphoneMask(value)
                setValue('cellphone', formatted)
              }}
            />
            {errors.cellphone && (
              <span className="text-xs opacity-80 text-red-300">
                {errors.cellphone.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-3 md:col-span-2">
            <Label htmlFor="email">E-mail</Label>
            <Input placeholder="seuemail@exemplo.com" {...register('email')} />
            {errors.email && (
              <span className="text-xs opacity-80 text-red-300">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-3 md:col-span-2">
            <Label htmlFor="name">Mensagem</Label>
            <Textarea
              rows={5}
              placeholder="Olá João! Estou entrando em contato..."
              {...register('message')}
            />
            {errors.message && (
              <span className="text-xs opacity-80 text-red-300">
                {errors.message.message}
              </span>
            )}
          </div>
        </div>
        {phase === 0 ? (
          <DialogFooter>
            <div className="grid grid-cols-2">
              <DialogClose asChild>
                <Button
                  className="w-full h-12 text-sm text-center rounded-none focus:outline-none"
                  variant="outline"
                >
                  Cancelar
                </Button>
              </DialogClose>
              <Button
                className="w-full h-12 text-sm text-center rounded-none focus:outline-none"
                variant="outline"
                onClick={handleSubmit(handleSubmitData)}
                disabled={
                  !name || !cellphone || !email || !message || state.submitting
                }
              >
                Próximo
              </Button>
            </div>
          </DialogFooter>
        ) : (
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="secondary" className="z-10">
                Fechar
              </Button>
            </DialogClose>
          </DialogFooter>
        )}
      </FormProvider>
    </DialogContent>
  )
}

export function ContactFormTrigger({ children }: PropsWithChildren) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <ContactForm />
    </Dialog>
  )
}
