import { OnboardingProgressBarItem } from "./onboarding-progress-bar-item";

interface OnboardingProgressBarProps {
	currentStep: number;
}

const steps = [
	{ step: 1, label: "Passo 1" },
	{ step: 2, label: "Passo 2" },
	{ step: 3, label: "Passo 3" },
	{ step: 4, label: "Passo 4" },
];

export function OnboardingProgressBar({
	currentStep,
}: OnboardingProgressBarProps) {
	return (
		<div className="w-full py-6 rounded-lg">
			<div className="flex items-center justify-between">
				{steps.map((stepData, index) => (
					<OnboardingProgressBarItem
						key={stepData.step}
						step={stepData.step}
						label={stepData.label}
						isActive={stepData.step === currentStep}
						isCompleted={stepData.step < currentStep}
						isLast={index === steps.length - 1}
					/>
				))}
			</div>
		</div>
	);
}
