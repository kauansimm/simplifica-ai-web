import { ChevronDown } from "lucide-react";

export function ChevronDownScroll() {
  return (
    <div className="w-full items-center flex flex-col">
      <ChevronDown
        className="text-white mb-[-1rem] animate-pulse"
        size={40}
      />
      <ChevronDown
        className="text-white animate-pulse"
      />
    </div>
  )
}