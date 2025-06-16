import { SignUpForm } from "@/components/sign-up/sign-up-form";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Cadastro - Risultar",
	description: "Crie sua conta no Risultar",
	keywords: ["Cadastro", "Risultar", "Territórios Digitais", "Controle Digital"],
};

export default function SignUpPage() {
	return <SignUpForm />;
}
