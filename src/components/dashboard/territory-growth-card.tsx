import { TrendingUp } from "lucide-react";

export function TerritoryGrowthCard() {
	return (
		<div className="bg-risultar from-finguard-blue to-finguard-purple rounded-2xl p-6 text-white relative overflow-hidden">
			<div className="absolute top-4 right-4">
				<button className="p-2 rounded-full bg-[#395445]">
					<TrendingUp className="w-5 h-5" />
				</button>
			</div>

			<div className="mb-4">
				<button className="px-3 py-1 bg-[#395445] rounded-full text-sm font-medium">
					Insights
				</button>
			</div>

			<div className="space-y-2">
				<h3 className="text-lg font-medium">
					Seus territórios digitais cresceram 12% nos últimos 30 dias
				</h3>
			</div>

			<div className="absolute bottom-0 left-0 right-0">
				<svg
					viewBox="0 0 400 100"
					className="w-full h-20 opacity-30"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M0 50C100 20 200 80 400 40"
						stroke="white"
						strokeWidth="2"
						fill="none"
					/>
				</svg>
			</div>
		</div>
	);
}
