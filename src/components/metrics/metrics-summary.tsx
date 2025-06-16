import { BaseMetrics } from "./base-metrics";
import { TerritorySelect } from "./territory-select";

interface Metric {
	title: string;
	metrics: {
		title: string;
		value: string;
	}[];
}

const metrics: Metric[] = [
	{
		title: "Base",
		metrics: [
			{
				title: "Textos",
				value: "20",
			},
			{
				title: "Mídias",
				value: "22",
			},
		],
	},
	{
		title: "Rede",
		metrics: [
			{
				title: "Redes",
				value: "4",
			},
			{
				title: "Posts",
				value: "138",
			},
		],
	},
	{
		title: "EDI",
		metrics: [
			{
				title: "Campanhas",
				value: "5",
			},
			{
				title: "Faturamento",
				value: "€ 1.250,00 ",
			},
		],
	},
	{
		title: "Total",
		metrics: [
			{
				title: "Alcance",
				value: "125.800",
			},
			{
				title: "Conversões",
				value: "234 (ROI 0,02%)",
			},
		],
	},
];

export function MetricsSummary() {
	return (
		<div className="flex flex-col w-full bg-white p-6 rounded-xl gap-6">
			<div className="w-full flex items-center justify-between">
				<h3 className="text-lg font-semibold text-finguard-text">Métricas</h3>

				<TerritorySelect />
			</div>

			<div className="grid grid-cols-4 gap-6">
				{metrics.map((metric) => (
					<BaseMetrics
						key={metric.title}
						title={metric.title}
						metrics={metric.metrics}
					/>
				))}
			</div>
		</div>
	);
}
