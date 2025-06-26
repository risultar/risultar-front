import { DigitalTerritoriesTableContainer } from "@/components/digital-territories/table/digital-territories-table-container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Page() {
	return (
		<div className="w-full flex flex-col gap-6">
			<h1 className="text-2xl">Base</h1>

			<div className="w-full flex items-center justify-between">
				<Input
					placeholder="Pesquisar território digital..."
					className="w-[300px] rounded-full bg-white"
				/>

				<Button className="rounded-full w-[200px]">
					Criar Território Digital
				</Button>
			</div>

			<div className="w-full">
				<DigitalTerritoriesTableContainer />
			</div>
		</div>
	);
}
