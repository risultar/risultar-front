import Image from "next/image";

interface AuthLayoutProps {
	children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
	return (
		<main className="w-full h-screen grid grid-cols-1 md:grid-cols-3 gap-0 bg-[#f9f8f7]">
			<div className="p-4 hidden md:block">
				<div className="w-full h-full bg-[#30463A] rounded-xl flex items-center justify-center">
					<div className="p-1 flex items-center justify-center bg-[#395547] rounded-xl shadow-lg">
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

			<div className="col-span-1 md:col-span-2 flex items-center justify-center px-4">
				<div className="space-y-6 p-6 border-[2] rounded-lg w-[500px]">
					<div className="flex flex-col gap-2">
						<div className="flex w-full justify-center">
							<h1 className="text-4xl text-risultar">Risultar</h1>
						</div>

						<span className="opacity-80 text-sm text-muted-foreground font-medium text-center">
							Preencha suas informações para começar a criar <br /> e gerenciar
							seus territórios digitais.
						</span>
					</div>

					{children}
				</div>
			</div>
		</main>
	);
}
