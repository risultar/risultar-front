import { Header } from "@/components/header/header";


export default function AppLayout({ children }: {
	children: React.ReactNode
}) {
	return (
		<div className="min-h-screen bg-muted">
			<Header />

			<main className="p-6">
				{children}
			</main>
		</div>
	);
}
