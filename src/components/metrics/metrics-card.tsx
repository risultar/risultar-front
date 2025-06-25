import { ReactNode } from "react";

interface MetricItem {
	label: string;
	value: string | ReactNode;
}

interface MetricsCardProps {
	title: string;
	value: string;
	description: string;
	metrics: MetricItem[];
}

export function MetricsCard({ title, description, metrics, value }: MetricsCardProps) {
	return (
		<div className="bg-white rounded-xl p-6 h-full flex flex-col">
			<div className="flex flex-col gap-4">
				<span className="font-semibold text-left">{title}</span>

				<div className="flex gap-2 items-end">
					<strong className="text-2xl">{value}</strong>
					<span className="text-lg text-muted-foreground">{description}</span>
				</div>

				<div className="grid grid-cols-3 gap-2">
					{metrics.map((metric, index) => (
						<span
							key={index}
							className="flex items-center text-xs gap-2 border px-2 py-1
						rounded-xl justify-center"
						>
							{metric.label}:{" "}
							<span className="font-semibold">{metric.value}</span>
						</span>
					))}
				</div>
			</div>
		</div>
	);
}
