import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import { Schedulin, type SchedulinInterface } from "./schedulin";
import { ChevronDownScroll } from "./chevron-down-scroll";

export function Header() {

  const examplesSchedulins: SchedulinInterface[] = [
    {
      clientName: 'João Silva',
      service: 'Corte + Barba',
      dateHour: '14:00',
      status: 'pending'
    },
    {
      clientName: 'Maria Souza',
      service: 'Manicure',
      dateHour: '15:00',
      status: 'completed'
    },
    {
      clientName: 'Irlan Nascimento',
      service: 'Consulta geral',
      dateHour: '09:30',
      status: 'completed'
    }
  ]

  return (
    <header className='flex-container gap-8 items-center'>
      <div className='w-[60%] space-y-2'>
        <h1 className='font-semibold text-white'>
          <span className='text-yellow font-bold'>
            Automatize { }
          </span>
          o agendamento.
          <br />
          <span className='text-yellow font-bold'>
            Multiplique { }
          </span>
          seus resultados.
        </h1>
        <h2 className='text-white text-xl'>
          Gerencie horários e clientes com uma plataforma completa e intuitiva.
          <br />
          Chega de planilhas e mensagens perdidas – centralize toda a sua gestão em um só lugar.
        </h2>
        <Button
          variant={`secondary`}
          className='text-xl p-6 mt-6 text-primary font-semibold'
        >
          Comece grátis e veja seu tempo render mais
          <Rocket
            size={25}
            className='ml-1'
          />
        </Button>
      </div>
      <div
        className='rounded-md bg-white shadow-lg flex-1 p-3 rotate-2 space-y-2'
      >
        <div
          className='rounded-md bg-primary p-4 flex flex-col gap-2'
        >
          <span className='text-white font-semibold font-raleway'>
            Dashboard
          </span>
          <div className='flex gap-2'>
            <div className='flex flex-col flex-1 bg-background/40 p-2 rounded-sm'>
              <span className='text-white font-semibold text-2xl'>
                124
              </span>
              <span className='text-white'>
                Agendamentos
              </span>
            </div>
            <div className='flex flex-col flex-1 bg-background/40 p-2 rounded-sm'>
              <span className='text-white font-semibold text-2xl'>
                R$5.500
              </span>
              <span className='text-white'>
                Faturamento
              </span>
            </div>
          </div>
        </div>
        {examplesSchedulins.map((schedulin) => (
          <Schedulin
            key={schedulin.clientName}
            clientName={schedulin.clientName}
            dateHour={schedulin.dateHour}
            service={schedulin.service}
            status={schedulin.status}
          />
        ))}
      </div>
    </header>
  )
}
