import { DigitalTerritory } from "@/@types/digital-territory";
import { TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { flexRender, Table } from "@tanstack/react-table";

interface DigitalTerritoriesTableHeaderProps {
	table: Table<DigitalTerritory>;
	widths?: string[];
}

export function DigitalTerritoriesTableHeader({
	table,
	widths = [
		"w-[50px]",
		"w-[300px]",
		"w-[200px]",
		"w-[200px]",
		"w-[200px]",
		"w-[200px]",
		"w-[100px]",
	],
}: DigitalTerritoriesTableHeaderProps) {
	return (
		<TableHeader>
			{table.getHeaderGroups().map((headerGroup) => (
				<TableRow key={headerGroup.id}>
					{headerGroup.headers.map((header) => {
						return (
							<TableHead
								key={header.id}
								className={`h-5 ${widths[header.index] || "w-full"}`}
							>
								{header.isPlaceholder
									? null
									: flexRender(
											header.column.columnDef.header,
											header.getContext()
									  )}
							</TableHead>
						);
					})}
				</TableRow>
			))}
		</TableHeader>
	);
}
