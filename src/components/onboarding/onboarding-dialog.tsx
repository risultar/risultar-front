"use client";
import { Lock } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { OnboardingFirstStep } from "./onboarding-first-step";
import { OnboardingProgressBar } from "./onboarding-progress-bar";

export function OnboardingDialog() {
	const [isOpen, setIsOpen] = useState(true);
	const [currentStep, setCurrentStep] = useState(1);

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogTrigger asChild>
				<Button
					variant="outline"
					size="icon"
					className="rounded-full border-none"
				>
					<Lock />
				</Button>
			</DialogTrigger>

			<DialogContent className="w-[700px] h-[500px] flex flex-col">
				<DialogHeader className="flex flex-row gap-4">
					<div>
						<Image
							src="/risultar-green.png"
							alt="Logo Risultar"
							width={40}
							height={40}
							quality={100}
							priority
						/>
					</div>

					<div className="flex flex-col gap-4">
						<DialogTitle>Bem-vindo à Risultar, Emanuel! </DialogTitle>

						<DialogDescription>
							Vamos configurar o seu primeiro Território Digital em poucos
							minutos.
						</DialogDescription>
					</div>
				</DialogHeader>

				<div className="flex-1 flex flex-col gap-4">
					<OnboardingProgressBar currentStep={currentStep} />

					{currentStep === 1 && <OnboardingFirstStep />}
				</div>

				<DialogFooter>
					{currentStep !== 1 && (
						<Button
							variant="outline"
							onClick={() => setCurrentStep(currentStep - 1)}
						>
							Anterior
						</Button>
					)}

					<Button onClick={() => setCurrentStep(currentStep + 1)}>
						Avançar
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
