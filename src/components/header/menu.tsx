import { LogOut, Settings } from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback } from "../ui/avatar";
import Link from "next/link";

export function Menu() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<div className="flex items-center gap-4 cursor-pointer">
					<Avatar className="w-10 h-10">
						<AvatarFallback>JD</AvatarFallback>
					</Avatar>
				</div>
			</DropdownMenuTrigger>

			<DropdownMenuContent className="w-56 mr-4">
				<div className="flex flex-col items-center justify-center p-2 gap-2">
					<Avatar className="w-20 h-20">
						<AvatarFallback>JD</AvatarFallback>
					</Avatar>

					<div className="flex flex-col items-center justify-center py-2">
						<strong className="text-sm">John Doe</strong>
						<span className="text-sm">john.doe@example.com</span>
					</div>
				</div>

				<DropdownMenuGroup>
					<DropdownMenuItem asChild>
						<Link href="*" className="flex items-center gap-2">
							<Settings />
							<span>Configurações</span>
						</Link>
					</DropdownMenuItem>
				</DropdownMenuGroup>

				<DropdownMenuSeparator />

				<DropdownMenuItem className="!text-red-500" asChild>
					<Link href="/entrar" className="flex items-center gap-2">
						<LogOut className="!text-red-500" />
						<span>Sair</span>
					</Link>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
