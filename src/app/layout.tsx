import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
	title: "Risultar",
	description:
		"Seus territórios digitais em um só lugar. Simples, eficiente, poderoso.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-br" className={poppins.className}>
			<head>
				<link rel="icon" href="/risultar-logo.png" sizes="any" />
			</head>

			<body suppressHydrationWarning={true}>{children}</body>
		</html>
	);
}
