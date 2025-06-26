import { flexRender, Table as TableType } from "@tanstack/react-table";
import { Table, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { DigitalTerritory } from "@/@types/digital-territory";
import { DigitalTerritoriesTableHeader } from "./digital-territories-table-header";
import { DigitalTerritoriesTableSkeleton } from "./digital-territories-table-skeleton";
import { digitalTerritoriesTableColumns } from "./digital-territories-table-columns";

interface DigitalTerritoriesTableProps {
	table: TableType<DigitalTerritory>;
	data: DigitalTerritory[];
	isLoadingGetDigitalTerritories: boolean;
}

export function DigitalTerritoriesTable({
	table,
	isLoadingGetDigitalTerritories,
	data,
}: DigitalTerritoriesTableProps) {
	return (
		<Table>
			<DigitalTerritoriesTableHeader table={table} />

			<TableBody>
				{isLoadingGetDigitalTerritories && <DigitalTerritoriesTableSkeleton />}

				{!isLoadingGetDigitalTerritories &&
					data &&
					data.length > 0 &&
					table.getRowModel().rows?.length > 0 &&
					table.getRowModel().rows.map((row) => (
						<TableRow
							key={row.id}
							data-state={row.getIsSelected() && "selected"}
						>
							{row.getVisibleCells().map((cell) => (
								<TableCell key={cell.id}>
									{flexRender(cell.column.columnDef.cell, cell.getContext())}
								</TableCell>
							))}
						</TableRow>
					))}

				{!isLoadingGetDigitalTerritories &&
					(!data ||
						data.length === 0 ||
						table.getRowModel().rows?.length === 0) && (
						<TableRow>
							<TableCell
								colSpan={digitalTerritoriesTableColumns.length}
								className="h-24 text-center"
							>
								Sem resultados
							</TableCell>
						</TableRow>
					)}
			</TableBody>
		</Table>
	);
}
