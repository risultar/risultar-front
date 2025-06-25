interface ActivityCardProps {
	color: string;
	title: string;
	time: string;
}

export function ActivityCard({ color, title, time }: ActivityCardProps) {
	return (
		<div
			className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-100
		transition-colors cursor-pointer border border-muted"
		>
			<div className={`w-2 h-2 ${color} rounded-full mt-2 flex-shrink-0`}/>

			<div className="flex-1">
				<p className="text-sm text-finguard-text font-medium">{title}</p>
				<p className="text-xs text-gray-500 mt-1">{time}</p>
			</div>
		</div>
	);
}
