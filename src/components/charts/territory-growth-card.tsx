"use client";
import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";
import { MonthSelect } from "./month-select";

export const description = "A linear area chart";

const chartData = [
	{ month: "Janeiro", user: 186 },
	{ month: "Fevereiro", user: 305 },
	{ month: "Março", user: 237 },
	{ month: "Abril", user: 73 },
	{ month: "Maio", user: 209 },
	{ month: "Junho", user: 214 },
];

const chartConfig = {
	user: {
		label: "Usuários",
		color: "#10b981",
	},
} satisfies ChartConfig;

export function TerritoryGrowthChart() {
	return (
		<Card>
			<CardHeader>
				<div className="flex items-center justify-between">
					<div>
						<CardTitle>Crescimento do Território Digital</CardTitle>

						<CardDescription>
							Mostrando total de usuários nos últimos 6 meses
						</CardDescription>
					</div>

					<MonthSelect />
				</div>
			</CardHeader>

			<CardContent>
				<ChartContainer config={chartConfig} className="h-[400px] w-full">
					<AreaChart
						accessibilityLayer
						data={chartData}
						margin={{
							left: 12,
							right: 12,
						}}
					>
						<defs>
							<linearGradient id="fill" x1="0" y1="0" x2="0" y2="1">
								<stop offset="5%" stopColor="#10b981" stopOpacity={0.5} />
								<stop offset="95%" stopColor="#10b981" stopOpacity={0.1} />
							</linearGradient>
						</defs>

						<CartesianGrid vertical={false} />

						<XAxis
							dataKey="month"
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							tickFormatter={(value) => value.slice(0, 3)}
						/>

						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent indicator="dot" hideLabel />}
						/>

						<Area
							dataKey="user"
							type="linear"
							fill="url(#fill)"
							stroke="#15803d"
						/>
					</AreaChart>
				</ChartContainer>
			</CardContent>

			<CardFooter>
				<div className="flex w-full items-start gap-2 text-sm">
					<div className="grid gap-2">
						<div className="flex items-center gap-2 leading-none font-medium">
							Crescimento de 5.2% este mês <TrendingUp className="h-4 w-4" />
						</div>
						<div className="text-muted-foreground flex items-center gap-2 leading-none">
							Janeiro - Junho 2025
						</div>
					</div>
				</div>
			</CardFooter>
		</Card>
	);
}
