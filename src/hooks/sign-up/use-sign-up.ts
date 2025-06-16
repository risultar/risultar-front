"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const formSchema = z
	.object({
		name: z.string().min(2, {
			message: "Nome deve ter pelo menos 2 caracteres.",
		}),
		email: z.string().email({
			message: "Digite um email válido.",
		}),
		password: z.string().min(6, {
			message: "Senha deve ter pelo menos 6 caracteres.",
		}),
		confirmPassword: z.string(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "As senhas não coincidem.",
		path: ["confirmPassword"],
	});

export type SignUpFormData = z.infer<typeof formSchema>;

export function useSignUp() {
	const form = useForm<SignUpFormData>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
	});

	function onSubmit(values: SignUpFormData) {
		console.log(values);
		// Handle form submission here
	}

	return {
		form,
		onSubmit,
	};
}
