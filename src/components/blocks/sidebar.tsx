import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarRail,
} from "@/components/ui/sidebar";
import { data } from "@/constants/Sidebar";
import { NavFolders, NavMain, NavUser, NavSecondary, Switcher } from "../misc";

export function AppSidebar() {
	return (
		<Sidebar>
			<SidebarHeader>
				<Switcher versions={data.versions} defaultVersion={data.versions[0]} />
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={data.navMain} />
				<NavFolders folders={data.folders} />
				<NavSecondary items={data.navSecondary} className="mt-auto" />
			</SidebarContent>
			<SidebarFooter>
				<NavUser user={data.user} />
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
}
