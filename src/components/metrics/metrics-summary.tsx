import { MetricsCard } from "./metrics-card";

const metricsData = [
	{
		title: "BASE",
		value: "€ 12.450",
		description: "administrados nos últimos 30 dias",
		metrics: [
			{ label: "Ativos", value: "42" },
			{ label: "Branding", value: "Completo" },
			{ label: "Metas", value: "3/5" },
		],
		buttons: [{ label: "Gerenciar Ativos" }, { label: "Editar Finanças" }],
	},
	{
		title: "REDE",
		value: "7",
		description: "redes conectadas",
		metrics: [
			{ label: "Alcance", value: "82.300" },
			{ label: "Posts (30d)", value: "38" },
			{ label: "Engajamento", value: "18%" },
		],
		buttons: [{ label: "Agendar Posts" }, { label: "Analisar Métricas" }],
	},
	{
		title: "EDI",
		value: "172",
		description: "conversões realizadas",
		metrics: [
			{ label: "Plataformas", value: "1" },
			{ label: "Investimento", value: "€3.650" },
			{ label: "ROI", value: "2,8x" },
		],
	},
];

export function MetricsSummary() {
	return (
		<div className="xl:col-span-3 flex flex-col w-full rounded-xl gap-6">
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
				{metricsData.map((cardData, index) => (
					<MetricsCard
						key={index}
						value={cardData.value}
						title={cardData.title}
						metrics={cardData.metrics}
						description={cardData.description}
					/>
				))}
			</div>
		</div>
	);
}
