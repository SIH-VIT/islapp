import { memo } from "react";
import { SidebarTrigger } from "../ui/sidebar";

interface TopbarProps {
	title: string;
}

const Topbar = memo(({ title }: TopbarProps) => {
	return (
		<header className="w-full border-b border-border flex h-fit items-center px-2 py-3 gap-4">
			<SidebarTrigger />
			<h1 className="capitalize text-xl">{title}</h1>
		</header>
	);
});

export default Topbar;
