interface OnboardingProgressBarItemProps {
	step: number;
	label: string;
	isActive: boolean;
	isCompleted: boolean;
	isLast?: boolean;
}

export function OnboardingProgressBarItem({
	step,
	label,
	isActive,
	isCompleted,
	isLast = false,
}: OnboardingProgressBarItemProps) {
	return (
		<div
			className={`flex items-center ${
				!isLast ? "w-full" : ""
			} *:last:max-w-max`}
		>
			<div className="flex items-center">
				<div
					className={`
            flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium
            ${
							isActive || isCompleted
								? "bg-[#30463A] text-white"
								: "bg-gray-300 text-gray-600"
						}
          `}
				>
					{step}
				</div>

				{/* <span
					className={`
            ml-3 text-sm font-medium
            ${isActive || isCompleted ? "text-[#30463A]" : "text-gray-500"}
          `}
				>
					{label}
				</span> */}
			</div>

			{!isLast && (
				<div
					className={`
            h-0.5 !max-w-full w-full mx-4 min-w-[60px]
            ${isCompleted ? "bg-[#30463A]" : "bg-gray-300"}
          `}
				/>
			)}
		</div>
	);
}
