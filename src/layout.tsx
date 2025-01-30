import { Outlet } from "react-router";

import { AppSidebar, Navbar } from "./components/blocks";
import { SidebarProvider } from "./components/ui/sidebar";

export default function Layout() {
	const loggedIn = localStorage.getItem("loggedIn");

	return (
		<main>
			<SidebarProvider>
				{loggedIn === "true" && <AppSidebar />}
					<Outlet />
			</SidebarProvider>
		</main>
	);
}
