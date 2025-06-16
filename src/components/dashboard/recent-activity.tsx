import { Button } from "../ui/button";

export function RecentActivity() {
	return (
		<div className="bg-white rounded-2xl p-6 border border-gray-100">
			<div className="flex items-center justify-between mb-6">
				<h3 className="text-lg font-semibold text-finguard-text">
					Atividades Recentes
				</h3>

				<Button variant="link">
					{" "}
					<span>Ver Todas</span>
				</Button>
			</div>

			<div className="space-y-2">
				<div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
					<div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
					<div className="flex-1">
						<p className="text-sm text-finguard-text font-medium">
							Campanha "Verão 2025" atualizada no Meta Ads
						</p>
						<p className="text-xs text-gray-500 mt-1">Hoje, 08:45</p>
					</div>
				</div>

				<div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
					<div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
					<div className="flex-1">
						<p className="text-sm text-finguard-text font-medium">
							5 novos posts agendados para Instagram
						</p>
						<p className="text-xs text-gray-500 mt-1">Ontem, 16:30</p>
					</div>
				</div>

				<div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
					<div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
					<div className="flex-1">
						<p className="text-sm text-finguard-text font-medium">
							3 novos ativos adicionados à base
						</p>
						<p className="text-xs text-gray-500 mt-1">Ontem, 10:15</p>
					</div>
				</div>
			</div>
		</div>
	);
}
