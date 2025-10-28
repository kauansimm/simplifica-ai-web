import { LogIn } from "lucide-react";
import { Button } from "../ui/button";

export function NavBar() {
  return (
    <nav className="flex mx-auto w-full bg-white shadow-sm rounded-2xl justify-between p-4 items-center">
      <a
        href="/"
        className="font-raleway font-bold text-primary text-xl flex items-center gap-2"
      >
        Orvys
        <span className="font-normal border-l-2 border-primary pl-2">
          Simplifica Aí
        </span>
      </a>
      <div
        className="space-x-4"
        aria-label="Navegação principal"
      >
        <span className="animate-fade-line hover:text-primary cursor-pointer">
          Recursos
        </span>
        <span className="animate-fade-line hover:text-primary cursor-pointer">
          Preços
        </span>
        <span className="animate-fade-line hover:text-primary cursor-pointer">
          Contato
        </span>
      </div>
      <div className="space-x-1.5 flex items-center">
        <Button>
          Começar agora
        </Button>
        <Button
          variant={"outline"}
        >
          <LogIn />
          Entrar
        </Button>
      </div>
    </nav>
  )
}