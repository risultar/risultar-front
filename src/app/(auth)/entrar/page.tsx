import { SignInForm } from "@/components/sign-in/sign-in-form";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Entrar - Risultar",
	description: "Entre com suas credenciais para acessar sua conta.",
	keywords: ["Entrar", "Risultar", "Territórios Digitais", "Controle Digital"],
};

export default function SignInPage() {
	return <SignInForm />;
}
