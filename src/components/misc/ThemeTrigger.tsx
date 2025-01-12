import { Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";
import { useTheme } from "@/hooks/use-theme";

export const ThemeTrigger = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<Button
			variant="ghost"
			size="icon"
			className="size-7"
			onClick={() => toggleTheme()}
		>
			{theme === "dark" ? <Moon /> : <Sun />}
		</Button>
	);
};
