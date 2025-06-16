import { Bell } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Menu } from "./menu";

export function Header() {
	const navItems = [
		{ name: "Dashboard", active: true },
		{ name: "Base", active: false },
		{ name: "Rede", active: false },
		{ name: "EDI", active: false },
	];

	return (
		<header className="bg-white border-b border-gray-100 px-6 py-4">
			<div className="flex items-center justify-between">
				<div className="flex items-center space-x-8">
					<div className="flex items-center space-x-4">
						<Image
							src="/risultar-green.png"
							alt="Logo Risultar"
							width={30}
							height={30}
							quality={100}
							priority
						/>

						<h1 className="text-2xl font-semibold text-risultar text-finguard-text">
							Risultar
						</h1>
					</div>

					<nav className="flex space-x-4">
						{navItems.map((item) => (
							<button
								key={item.name}
								className={`px-4 py-2 cursor-pointer rounded-full text-sm font-medium transition-colors ${
									item.active
										? "bg-risultar text-white"
										: "text-gray-600 hover:bg-muted"
								}`}
							>
								{item.name}
							</button>
						))}
					</nav>
				</div>

				<div className="flex items-center space-x-4">
					<Button
						size="icon"
						variant="ghost"
						className="p-2 w-10 h-10 rounded-full hover:bg-gray-100"
					>
						<Bell className="w-5 h-5 text-gray-600" />
					</Button>

					<Menu />
				</div>
			</div>
		</header>
	);
}
