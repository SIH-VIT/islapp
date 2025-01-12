import { Outlet } from "react-router";

import { AppSidebar } from "./components/blocks";
import { SidebarProvider } from "./components/ui/sidebar";

export default function Layout() {
	return (
		<main>
			<SidebarProvider>
				<AppSidebar />
				<Outlet />
			</SidebarProvider>
		</main>
	);
}
