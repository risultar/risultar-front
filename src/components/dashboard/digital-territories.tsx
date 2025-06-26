import { ArrowRight, Triangle } from "lucide-react";
import { Button } from "../ui/button";

export const digitalTerritories = [
	{
		id: 1,
		name: "Agência de Marketing",
		active: true,
	},
	{
		id: 2,
		name: "E-commerce Moda",
		active: false,
	},
];

export function DigitalTerritories() {
	return (
		<div className="flex bg-white w-full rounded-xl flex-col p-6 gap-2">
			<div className="flex w-full items-center justify-between">
				<h3 className="text-lg font-semibold text-finguard-text flex gap-2 items-center">
					<Triangle size={20}/>
					Territórios Digitais
				</h3>

				<Button className="rounded-full">Criar TD</Button>
			</div>

			{digitalTerritories.map((territory) => (
				<div key={territory.id} className="flex justify-between rounded-lg p-2">
					<div className="flex items-center gap-2">
						<div className="flex w-10 h-10 items-center justify-center p-4 rounded-lg bg-muted">
							<span>{territory.name[0]}</span>
						</div>

						<span className="text-sm font-medium">{territory.name}</span>
					</div>

					<div className="flex items-center gap-2">
						<div
							className={`text-xs flex items-center w-[90px] justify-center px-4 py-0.5 rounded-xl font-medium gap-2
						${
							territory.active
								? "bg-green-100 text-green-700"
								: "bg-red-100 text-red-700"
						}`}
						>
							<div
								className={`w-1.5 h-1.5 rounded-full ${
									territory.active ? "bg-green-700" : "bg-red-700"
								}`}
							/>
							{territory.active ? "Ativo" : "Inativo"}
						</div>

						<Button variant="ghost" className="text-sm rounded-full h-6">
							Acessar
							<ArrowRight />
						</Button>
					</div>
				</div>
			))}

			<div className="w-full flex self-end mt-auto justify-end">
				<Button variant="link" className="text-muted-foreground">
					Ver Todos
				</Button>
			</div>
		</div>
	);
}
