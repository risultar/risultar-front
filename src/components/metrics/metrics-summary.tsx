import { MetricsCard } from "./metrics-card";

const metricsData = [
	{
		title: "BASE",
		metrics: [
			{ label: "Ativos", value: "42" },
			{ label: "Valor Financeiro", value: "€ 12.450" },
			{ label: "Branding", value: "Completo" },
			{ label: "Metas", value: "3/5 definidas" },
		],
		buttons: [{ label: "Gerenciar Ativos" }, { label: "Editar Finanças" }],
	},
	{
		title: "REDE",
		metrics: [
			{ label: "Redes Conectadas", value: "4" },
			{ label: "Alcance Orgânico", value: "82.300" },
			{ label: "Posts (30d)", value: "38" },
			{ label: "Engajamento", value: "↑ 18%" },
		],
		buttons: [{ label: "Agendar Posts" }, { label: "Analisar Métricas" }],
	},
	{
		title: "EDI",
		metrics: [
			{ label: "Plataformas", value: "1" },
			{ label: "Investimento", value: "€ 3.650" },
			{ label: "Conversões", value: "172" },
			{ label: "ROI", value: "2,8x" },
		],
		buttons: [{ label: "Ver Campanhas" }, { label: "Otimizar Anúncios" }],
	},
];

export function MetricsSummary() {
	return (
		<div className="xl:col-span-3 flex flex-col w-full rounded-xl gap-6">
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
				{metricsData.map((cardData, index) => (
					<MetricsCard
						key={index}
						title={cardData.title}
						metrics={cardData.metrics}
						buttons={cardData.buttons}
					/>
				))}
			</div>
		</div>
	);
}
