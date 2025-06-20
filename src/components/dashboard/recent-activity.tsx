import { Button } from "../ui/button";
import { ActivityCard } from "./activity-card";

const activities = [
	{
		color: "bg-green-500",
		title: 'Campanha "Verão 2025" atualizada no Meta Ads',
		time: "Hoje, 08:45",
	},
	{
		color: "bg-blue-500",
		title: "5 novos posts agendados para Instagram",
		time: "Ontem, 16:30",
	},
	{
		color: "bg-purple-500",
		title: "3 novos ativos adicionados à base",
		time: "Ontem, 10:15",
	},
];

export function RecentActivity() {
	return (
		<div className="bg-white rounded-2xl p-6 space-y-4 border border-gray-100">
			<h3 className="text-lg font-semibold text-finguard-text">
				Atividades Recentes
			</h3>

			<div className="space-y-2">
				{activities.map((activity, index) => (
					<ActivityCard
						key={index}
						color={activity.color}
						title={activity.title}
						time={activity.time}
					/>
				))}
			</div>

			<div className="w-full flex self-end mt-auto justify-end">
				<Button variant="link" className="text-muted-foreground">
					Ver Todas
				</Button>
			</div>
		</div>
	);
}
