import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeTrigger, DateTime } from "../misc";

const Navbar = ({ title }: { title: string }) => {
	return (
		<header className="flex h-16 items-center gap-2 border-b px-4 w-full">
			<SidebarTrigger className="-ml-1" />
			<Separator orientation="vertical" className="mr-2 h-4" />
			<h1>{title}</h1>
			<div className="ml-auto flex items-center gap-4">
				<ThemeTrigger />
				<Separator orientation="vertical" className="hidden md:block h-4" />
				<DateTime variant="time" className="hidden md:block" />
			</div>
		</header>
	);
};

export default Navbar;
