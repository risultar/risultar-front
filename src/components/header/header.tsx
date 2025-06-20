import { Bell } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Menu } from "./menu";
import { TerritorySelect } from "../metrics/territory-select";
import { Navbar } from "./navbar";

export function Header() {
	return (
		<header className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
			<div className="flex items-center space-x-8">
				<Image
					src="/risultar-green.png"
					alt="Logo Risultar"
					width={40}
					height={40}
					quality={100}
					priority
				/>
			</div>

			<Navbar />

			<div className="flex items-center space-x-4">
				<TerritorySelect />

				<Button
					size="icon"
					variant="ghost"
					className="p-2 w-10 h-10 rounded-full bg-white hover:bg-white/50"
				>
					<Bell className="w-5 h-5 text-gray-600" />
				</Button>

				<Menu />
			</div>
		</header>
	);
}
