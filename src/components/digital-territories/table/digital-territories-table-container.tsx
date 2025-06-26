"use client";
import * as React from "react";
import {
	ColumnFiltersState,
	SortingState,
	VisibilityState,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from "@tanstack/react-table";
import { digitalTerritoriesTableColumns } from "./digital-territories-table-columns";
import { DigitalTerritoriesTable } from "./digital-territories-table";
import { digitalTerritories } from "@/mocks/digital-territories";
import { TableFooter } from "@/components/table/table-footer";

export function DigitalTerritoriesTableContainer() {
	const [sorting, setSorting] = React.useState<SortingState>([
		{
			id: "name",
			desc: false,
		},
	]);
	const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
		[]
	);
	const [columnVisibility, setColumnVisibility] =
		React.useState<VisibilityState>({});
	const [rowSelection, setRowSelection] = React.useState({});

	const table = useReactTable({
		data: digitalTerritories,
		columns: digitalTerritoriesTableColumns,
		onSortingChange: setSorting,
		onColumnFiltersChange: setColumnFilters,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		onColumnVisibilityChange: setColumnVisibility,
		onRowSelectionChange: setRowSelection,
		state: {
			sorting,
			columnFilters,
			columnVisibility,
			rowSelection,
		},
	});

	return (
		<div
			className="w-full space-y-4 bg-white border border-muted rounded-xl
		overflow-hidden"
		>
			<DigitalTerritoriesTable
				table={table}
				data={digitalTerritories}
				isLoadingGetDigitalTerritories={false}
			/>

			<TableFooter table={table} />
		</div>
	);
}
