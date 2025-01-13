import { ChevronRight, Frame, type LucideIcon } from "lucide-react";

import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
	SidebarGroup,
	SidebarGroupAction,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router";

export function NavFolders({
	folders,
}: {
	folders: {
		title: string;
		url: string;
		icon: LucideIcon;
		isActive?: boolean;
		items?: {
			title: string;
			url: string;
		}[];
	}[];
}) {
	return (
		<SidebarGroup>
			<SidebarGroupLabel>
				<span>Folders</span>
			</SidebarGroupLabel>
			<SidebarGroupAction title="Manage Folders">
				<Frame /> <span className="sr-only">Manage Folders</span>
			</SidebarGroupAction>
			<SidebarMenu>
				{folders.map((item) => (
					<Collapsible
						key={item.title}
						asChild
						defaultOpen={item.isActive}
						className="group/collapsible"
					>
						<SidebarMenuItem>
								<SidebarMenuButton
									tooltip={item.title}
									className="hover:underline hover:bg-transparent active:bg-transparent"
								>
									{item.icon && <item.icon />}
							<span >
									<span>{item.title}</span>
							</span>
									<CollapsibleTrigger asChild>
										<ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90 hover:bg-sidebar-accent rounded-sm" />
									</CollapsibleTrigger>
								</SidebarMenuButton>
							<CollapsibleContent>
								<SidebarMenuSub>
									{item.items?.map((subItem) => (
										<SidebarMenuSubItem key={subItem.title}>
											<SidebarMenuSubButton asChild>
												<Link to={subItem.url}>
													<span>{subItem.title}</span>
												</Link>
											</SidebarMenuSubButton>
										</SidebarMenuSubItem>
									))}
								</SidebarMenuSub>
							</CollapsibleContent>
						</SidebarMenuItem>
					</Collapsible>
				))}
			</SidebarMenu>
		</SidebarGroup>
	);
}
