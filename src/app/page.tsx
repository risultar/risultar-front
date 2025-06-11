import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Playfair_Display } from "next/font/google";
import Image from "next/image";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export default function Home() {
  return (
    <main className="w-full h-screen grid grid-cols-1 md:grid-cols-3 gap-0 bg-[#f9f8f7]">
      <div className="p-4 hidden md:block">
        <div className="w-full h-full bg-[#30463A] rounded-xl flex items-center justify-center">
          <div
            className="p-1 flex items-center justify-center bg-[#395547]
          rounded-xl shadow-lg"
          >
            <Image
              src="/risultar.png"
              alt="Logo Risultar"
              width={80}
              height={80}
              quality={100}
              priority
            />
          </div>
        </div>
      </div>

      <div className="col-span-1 md:col-span-2 flex items-center justify-center">
        <div className="space-y-6 p-6 border-[2] rounded-lg">
          <div className="flex flex-col gap-2">
            <div className="flex w-full justify-center">
              <Image
                src="/risultar-name.png"
                alt="Logo Risultar"
                className="mb-4"
                width={200}
                height={100}
                quality={100}
                priority
              />
            </div>

            <span className="opacity-80 text-sm font-medium">
              Preencha suas informações para começar a usar o sistema.
            </span>
          </div>

          <form className="space-y-4">
            <div className="space-y-2">
              <Label
                htmlFor="name"
                className="font-medium text-muted-foreground"
              >
                Nome
              </Label>

              <Input
                id="name"
                name="name"
                placeholder="Digite o seu nome"
                className="bg-white h-10"
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="font-medium text-muted-foreground"
              >
                Email
              </Label>

              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Digite o seu email"
                className="bg-white h-10"
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="password"
                className="font-medium text-muted-foreground"
              >
                Senha
              </Label>

              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Digite a sua senha"
                className="bg-white h-10"
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="confirmPassword"
                className="font-medium text-muted-foreground"
              >
                Confimar Senha
              </Label>

              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirme a sua senha"
                className="bg-white h-10"
              />
            </div>

            <Button
              type="submit"
              className="w-full h-10 bg-[#30463A] text-[#EFEEEA] hover:bg-[#2a3b2f] mt-2"
            >
              Confirmar
            </Button>

            <Button
              variant="link"
              className="text-sm w-full font-medium text-[#30463A] hover:text-[#2a3b2f]"
            >
              Já possui uma conta? Faça login
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}
