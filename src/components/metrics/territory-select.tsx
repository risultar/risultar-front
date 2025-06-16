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

export function TerritorySelect() {
	return (
		<Select defaultValue="agencia-de-marketing">
			<SelectTrigger className="rounded-full px-6 w-[250px]">
				<SelectValue placeholder="Selecione o território digital" />
			</SelectTrigger>

			<SelectContent>
				<SelectGroup>
					<SelectLabel>Território Digital</SelectLabel>

					<SelectItem value="agencia-de-marketing">
						Agência de Marketing
					</SelectItem>

					<SelectItem value="e-commerce-moda">E-commerce Moda</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	);
}
