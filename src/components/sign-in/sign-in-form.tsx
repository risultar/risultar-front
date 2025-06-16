"use client";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FormInput } from "@/components/form/form-input";
import { useSignIn } from "@/hooks/sign-in/use-sign-in";
import Link from "next/link";

export function SignInForm() {
	const { form, onSubmit } = useSignIn();

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
				<FormInput
					form={form}
					entity="email"
					type="email"
					label="Email"
					placeholder="Digite o seu email"
				/>

				<FormInput
					form={form}
					entity="password"
					type="password"
					label="Senha"
					placeholder="Digite a sua senha"
				/>

				<Button
					type="submit"
					className="w-full h-10 bg-risultar text-[#EFEEEA] hover:bg-[#2a3b2f] mt-2"
				>
					Entrar
				</Button>

				<Button
					variant="link"
					type="button"
					className="text-sm w-full font-medium text-risultar hover:text-[#2a3b2f]"
					asChild
				>
					<Link href="/cadastro">Não possui uma conta? Cadastre-se</Link>
				</Button>
			</form>
		</Form>
	);
}
