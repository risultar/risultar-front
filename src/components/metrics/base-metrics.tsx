interface MetricsCardProps {
	title: string;
	metrics: {
		title: string;
		value: string;
	}[];
}

export function BaseMetrics({ title, metrics }: MetricsCardProps) {
	return (
		<div className="space-y-6">
			<p className="text">{title}</p>

			<div className="flex flex-col gap-2">
				{metrics.map((metric) => (
					<div key={metric.title}>
						<p className="text-sm text-gray-600 mb-1">{metric.title}</p>
						<p className="font-semibold text-gray-900">{metric.value}</p>
					</div>
				))}
			</div>
		</div>
	);
}
