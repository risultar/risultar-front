import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowDown, ArrowUp, Edit } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { DigitalTerritory } from "@/@types/digital-territory";
import { Badge } from "@/components/ui/badge";

export const digitalTerritoriesTableColumns: ColumnDef<DigitalTerritory>[] = [
	{
		id: "select",
		header: ({ table }) => (
			<div className="flex w-10 h-10 items-center justify-center">
				<Checkbox
					checked={
						table.getIsAllPageRowsSelected() ||
						(table.getIsSomePageRowsSelected() && "indeterminate")
					}
					onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
					aria-label="Select all"
				/>
			</div>
		),
		cell: ({ row }) => (
			<div className="flex w-10 h-10 items-center justify-center">
				<Checkbox
					checked={row.getIsSelected()}
					onCheckedChange={(value) => row.toggleSelected(!!value)}
					aria-label="Select row"
				/>
			</div>
		),
		enableSorting: false,
		enableHiding: false,
	},
	{
		accessorKey: "name",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="!p-0 hover:bg-transparent"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				Nome
				{column.getIsSorted() !== "desc" && (
					<ArrowUp className="ml-2 h-2 w-2" />
				)}
				{column.getIsSorted() === "desc" && (
					<ArrowDown className="ml-2 h-2 w-2" />
				)}
			</Button>
		),
		cell: ({ row }) => (
			<div className="font-semibold">{row.getValue("name")}</div>
		),
	},
	{
		accessorKey: "status",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="!p-0 hover:bg-transparent"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				Status
				{column.getIsSorted() !== "desc" && (
					<ArrowUp className="ml-2 h-4 w-4" />
				)}
				{column.getIsSorted() === "desc" && (
					<ArrowDown className="ml-2 h-4 w-4" />
				)}
			</Button>
		),
		cell: ({ row }) => {
			const status = row.getValue("status") as boolean;
			return (
				<Badge
					variant={status ? "default" : "secondary"}
					className={`
          w-[75px]
					${status ? "bg-risultar" : ""}
					`}
				>
					{status ? "Ativo" : "Inativo"}
				</Badge>
			);
		},
	},
	{
		accessorKey: "active",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="!p-0 hover:bg-transparent"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				Ativos
				{column.getIsSorted() !== "desc" && (
					<ArrowUp className="ml-2 h-4 w-4" />
				)}
				{column.getIsSorted() === "desc" && (
					<ArrowDown className="ml-2 h-4 w-4" />
				)}
			</Button>
		),
		cell: ({ row }) => <div>{row.getValue("active")}</div>,
	},
	{
		accessorKey: "netwoks",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="!p-0 hover:bg-transparent"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				Redes
				{column.getIsSorted() !== "desc" && (
					<ArrowUp className="ml-2 h-4 w-4" />
				)}
				{column.getIsSorted() === "desc" && (
					<ArrowDown className="ml-2 h-4 w-4" />
				)}
			</Button>
		),
		cell: ({ row }) => <div>{row.getValue("netwoks")}</div>,
	},
	{
		accessorKey: "campaings",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="!p-0 hover:bg-transparent"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				Campanhas
				{column.getIsSorted() !== "desc" && (
					<ArrowUp className="ml-2 h-4 w-4" />
				)}
				{column.getIsSorted() === "desc" && (
					<ArrowDown className="ml-2 h-4 w-4" />
				)}
			</Button>
		),
		cell: ({ row }) => <div>{row.getValue("campaings")}</div>,
	},
	{
		id: "actions",
		header: "Ações",
		cell: () => {
			return (
				<div className="flex items-center gap-4">
					<Button variant="outline" size="icon" disabled>
						<Edit />
						<span className="sr-only">Editar</span>
					</Button>
				</div>
			);
		},
	},
];
