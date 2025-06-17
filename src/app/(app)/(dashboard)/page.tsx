import { Header } from "@/components/header/header";
import { TerritoryGrowthCard } from "@/components/dashboard/territory-growth-card";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { DigitalTerritories } from "@/components/dashboard/digital-territories";
import { MetricsSummary } from "@/components/metrics/metrics-summary";

export default function Dashboard() {
	return (
		<div className="min-h-screen bg-muted">
			<Header />

			<main className="p-6">
				<div className="grid grid-cols-3 lg:grid-cols-3 gap-6">
					<TerritoryGrowthCard />

					<div className="col-span-2">
						<DigitalTerritories />
					</div>

					<div className="col-span-2">
						<MetricsSummary />
					</div>

					<RecentActivity />
				</div>
			</main>
		</div>
	);
}
