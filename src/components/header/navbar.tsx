'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
	{ name: "Dashboard", path: "/", label: "Dashboard" },
	{ name: "Base", path: "/base", label: "Base" },
	{ name: "Rede", path: "/rede", label: "Rede" },
	{ name: "EDI", path: "/edi", label: "EDI" },
];

export function Navbar() {
	const pathname = usePathname();

	return (
		<nav className="hidden xl:flex space-x-4 ml-64">
			{navItems.map((item) => (
				<Link
					key={item.name}
					href={item.path}
					className={`px-6 py-4 cursor-pointer rounded-full text-sm font-medium transition-colors ${
						pathname === item.path || (item.path === "/" && pathname === "/")
							? "bg-risultar text-white"
							: "text-gray-600 bg-white hover:bg-white/60"
					}`}
				>
					{item.label}
				</Link>
			))}
		</nav>
	);
}
