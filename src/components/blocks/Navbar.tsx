import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeTrigger, DateTime } from "../misc";
import { cn } from "@/lib";

const Navbar = ({
	title,
	className,
}: {
	title: string;
	className?: string;
}) => {
	return (
		<header
			className={cn(
				"flex h-14 items-center gap-2 border-b px-4 w-full",
				className
			)}
		>
			<SidebarTrigger className="-ml-1" />
			<Separator orientation="vertical" className="mr-2 h-4 rounded-lg" />
			<h1>{title}</h1>
			<div className="ml-auto flex items-center gap-4">
				<ThemeTrigger />
				<Separator
					orientation="vertical"
					className="hidden md:block h-4 rounded-lg"
				/>
				<DateTime variant="time" className="hidden md:block" />
			</div>
		</header>
	);
};

export default Navbar;
