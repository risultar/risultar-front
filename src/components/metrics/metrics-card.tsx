import { ReactNode } from "react";
import { Button } from "../ui/button";

interface MetricItem {
	label: string;
	value: string | ReactNode;
}

interface ButtonItem {
	label: string;
	onClick?: () => void;
}

interface MetricsCardProps {
	title: string;
	metrics: MetricItem[];
	buttons: ButtonItem[];
}

export function MetricsCard({ title, metrics, buttons }: MetricsCardProps) {
	return (
		<div className="bg-white rounded-xl p-6 h-full flex flex-col">
			<div className="flex flex-col gap-2">
				<span className="font-semibold text-left">{title}</span>
				{metrics.map((metric, index) => (
					<span key={index}>
						{metric.label}: <b>{metric.value}</b>
					</span>
				))}

				<div className="mt-4 flex flex-col gap-2">
					{buttons.map((button, index) => (
						<Button
							key={index}
							variant="outline"
							className="rounded-full w-fit px-4 py-1"
							onClick={button.onClick}
						>
							{button.label}
						</Button>
					))}
				</div>
			</div>
		</div>
	);
}
