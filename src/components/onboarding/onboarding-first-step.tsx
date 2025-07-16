import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

export function OnboardingFirstStep() {
	return (
		<>
			<p className="text-muted-foreground">
				Para começar, conte-nos um pouco sobre você:
			</p>

			<Label>Qual é o seu principal objetivo com a Risultar?</Label>

			<div className="flex flex-col gap-2">
				<div className="flex items-center gap-2">
					<Checkbox />
					Gerir minha presença online
				</div>

				<div className="flex items-center gap-2">
					<Checkbox />
					Aumentar vendas/conversões
				</div>

				<div className="flex items-center gap-2">
					<Checkbox />
					Agendar Posts para Redes
				</div>

				<div className="flex items-center gap-2">
					<Checkbox />
					Otimizar campanhas pagas
				</div>

				<div className="flex items-center gap-2">
					<Checkbox />
					Gereir finanças dos meus negócios
				</div>
			</div>
		</>
	);
}
