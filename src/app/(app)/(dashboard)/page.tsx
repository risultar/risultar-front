import { TerritoryGrowthChart } from "@/components/charts/territory-growth-card";
import { DigitalTerritories } from "@/components/dashboard/digital-territories";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { TerritoryGrowthCard } from "@/components/dashboard/territory-growth-card";
import { MetricsSummary } from "@/components/metrics/metrics-summary";
import { OnboardingDialog } from "@/components/onboarding/onboarding-dialog";

export default function Dashboard() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
			<TerritoryGrowthCard />

			<DigitalTerritories />

			<RecentActivity />

			<div className="col-span-1 md:col-span-2 xl:col-span-3">
				<MetricsSummary />
			</div>

			<div className="col-span-1 md:col-span-2 xl:col-span-3">
				<TerritoryGrowthChart />
			</div>
		</div>
	);
}
