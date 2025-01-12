import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
	SelectGroup,
} from "@/components/ui/select";
import { cn } from "@/lib";
import { Activity, Disc, Mic, Settings2 } from "lucide-react";

export default function VoiceInputCard({
	className,
		children,
		onClick,
	}: {
		className?: string;
		children?: React.ReactElement;
		onClick?: React.MouseEventHandler<HTMLDivElement>;
}) {
	return (
		<Card className={cn("col-span-3", className)} onClick={onClick}>
			<CardHeader>
				<CardTitle className="text-2xl flex items-center justify-between">
					Speak to translate !
					<div className="rounded-full hidden md:block bg-pink-600/20 p-2">
						<Activity className="size-5 text-pink-600" />
					</div>
					{children}
				</CardTitle>
				<CardDescription className="max-sm:max-w-96">
					Speak into the microphone to instantly translate your words into sign
					language.
				</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col md:flex-row gap-3">
				<Select>
					<SelectTrigger className="rounded-full h-10 pl-4 bg-primary-foreground">
						<div className="flex items-center gap-2">
							<Mic className="scale-75" />
							<SelectValue placeholder="Default Microphone" />
						</div>
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectItem value="default">Default Microphone</SelectItem>
							<SelectItem value="headphones">High Fidelity Mic</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
			</CardContent>
			<CardFooter className="flex flex-col md:flex-row w-fit flex-wrap gap-4 -mt-1">
				<Button
					size={"lg"}
					variant={"default"}
					className="rounded-full gap-3"
					aria-label="Adjust Microphone"
				>
					<Settings2 className="scale-125" />
					Adjust Microphone
				</Button>
				<Button
					size={"lg"}
					variant={"tertiary"}
					className="rounded-full gap-3"
					aria-label="Start Webcam"
				>
					<Disc className="scale-125 text-red-500" />
					Start Recording
				</Button>
			</CardFooter>
		</Card>
	);
}
