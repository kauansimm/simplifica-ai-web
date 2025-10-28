import { cn } from "@/lib/utils"

export interface SchedulinInterface {
  clientName: string
  service: string
  dateHour: string
  status: 'pending' | 'completed'
}

export function Schedulin({ clientName, service, dateHour, status }: SchedulinInterface) {

  const statusInfo = {
    pending: 'bg-yellow',
    completed: 'bg-green',
  }

  return (
    <div className='flex justify-between items-center rounded-md bg-foreground/3 px-4 py-2 gap-2'>
      <div className='flex flex-col'>
        <span className='font-semibold'>
          {clientName}
        </span>
        <span>
          {service} - {dateHour}
        </span>
      </div>
      <span
        className={cn(
          'rounded-full h-3 w-3',
          statusInfo[status]
        )}
      />
    </div>
  )
}
