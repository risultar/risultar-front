import * as React from "react";

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export function MonthSelect() {
	return (
		<Select defaultValue="junho">
			<SelectTrigger
				className="rounded-full px-6 w-[200px] bg-white hover:bg-white/50
			cursor-pointer"
			>
				<SelectValue placeholder="Selecione o mês" />
			</SelectTrigger>

			<SelectContent>
				<SelectGroup>
					<SelectLabel>Mês</SelectLabel>

					<SelectItem value="janeiro">Janeiro</SelectItem>
					<SelectItem value="fevereiro">Fevereiro</SelectItem>
					<SelectItem value="marco">Março</SelectItem>
					<SelectItem value="abril">Abril</SelectItem>
					<SelectItem value="maio">Maio</SelectItem>
					<SelectItem value="junho">Junho</SelectItem>
					<SelectItem value="julho">Julho</SelectItem>
					<SelectItem value="agosto">Agosto</SelectItem>
					<SelectItem value="setembro">Setembro</SelectItem>
					<SelectItem value="outubro">Outubro</SelectItem>
					<SelectItem value="novembro">Novembro</SelectItem>
					<SelectItem value="dezembro">Dezembro</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	);
}
