 ;
import { Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";
import React from "react";

export const ThemeTrigger = () => {
    const [theme, setTheme] = React.useState('light');

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
            document.body.classList.add('dark');
        } else {
            setTheme('light');
            document.body.classList.remove('dark');
        }
    }

    return (
        <Button variant="ghost" size="icon" className="size-7" onClick={() => toggleTheme()}>
            {theme === 'dark' ? <Moon /> : <Sun />}
        </Button>
    )
}