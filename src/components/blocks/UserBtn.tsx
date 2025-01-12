import { cn } from "@/lib";
import { Button } from "../ui/button";
import { useState } from "react";

export default function UserBtn({ className }: { className?: string }) {
	const [isLoggedIn, setIsLoggedIn] = useState(
		() => localStorage.getItem("loggedIn") === "true"
	);

	const handleLogin = () => {
		localStorage.setItem("loggedIn", "true");
		setIsLoggedIn(true);
		window.location.reload();
	};

	if (isLoggedIn) return null;

	return (
		<Button className={cn("", className)} onClick={handleLogin}>
			Login
		</Button>
	);
}
