const navItems = [
	{ name: "Dashboard", active: true },
	{ name: "Base", active: false },
	{ name: "Rede", active: false },
	{ name: "EDI", active: false },
];

export function Navbar() {
	return (
		<nav className="hidden xl:flex space-x-4 ml-64">
			{navItems.map((item) => (
				<button
					key={item.name}
					className={`px-6 py-4 cursor-pointer rounded-full text-sm font-medium transition-colors ${
						item.active
							? "bg-risultar text-white"
							: "text-gray-600 bg-white hover:bg-white/90"
					}`}
				>
					{item.name}
				</button>
			))}
		</nav>
	);
}
