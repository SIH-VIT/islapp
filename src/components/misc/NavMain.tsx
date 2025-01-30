import { MoreHorizontal, type LucideIcon } from "lucide-react";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	SidebarGroup,
	SidebarMenu,
	SidebarMenuAction,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from "@/components/ui/sidebar";
import { Link, useLocation } from "react-router";

export function NavMain({
	items,
}: {
	items: {
		name: string;
		url: string;
		icon: LucideIcon;
		color?: string;
		isActive?: boolean;
		dropdown?: boolean;
		dropdownMenu?: {
			title: string;
			url: string;
			icon: LucideIcon;
			color: string;
		}[];
	}[];
}) {
	const { isMobile } = useSidebar();
	const activePath = useLocation().pathname;

	return (
		<SidebarGroup className="group-data-[collapsible=icon]:hidden">
			<SidebarMenu>
				{items.map((item) => (
					<SidebarMenuItem key={item.name}>
						<SidebarMenuButton
							asChild
							className={`${
								activePath.includes(item.name.toLowerCase())
									? "bg-sidebar-accent"
									: ""
							}`}
						>
							<Link to={item.url}>
								<item.icon className={item?.color} />
								<span>{item.name}</span>
							</Link>
						</SidebarMenuButton>
						{item.dropdown && (
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<SidebarMenuAction showOnHover>
										<MoreHorizontal />
										<span className="sr-only">More</span>
									</SidebarMenuAction>
								</DropdownMenuTrigger>
								<DropdownMenuContent
									className="w-48"
									side={isMobile ? "bottom" : "right"}
									align={isMobile ? "end" : "start"}
								>
									{item?.dropdownMenu?.map((item) => (
										<DropdownMenuItem key={item.title}>
											{/* <Link href={item.url}> */}
											<item.icon className={item.color} />
											<span>{item.title}</span>
											{/* </Link> */}
										</DropdownMenuItem>
									))}
								</DropdownMenuContent>
							</DropdownMenu>
						)}
					</SidebarMenuItem>
				))}
			</SidebarMenu>
		</SidebarGroup>
	);
}
