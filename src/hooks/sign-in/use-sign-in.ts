"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
	email: z.string().email({
		message: "Digite um email válido.",
	}),
	password: z.string().min(1, {
		message: "Senha é obrigatória.",
	}),
});

export type SignInFormData = z.infer<typeof formSchema>;

export function useSignIn() {
	const form = useForm<SignInFormData>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	function onSubmit(values: SignInFormData) {
		console.log(values);
		// Handle form submission here
	}

	return {
		form,
		onSubmit,
	};
}
