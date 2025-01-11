import { Outlet } from "react-router";
import { SidebarProvider } from "./components/ui/sidebar";
import { AppSidebar } from "./components/blocks";

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
