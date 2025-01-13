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
import { Aperture, ChevronDown, Settings2, Video } from "lucide-react";
import React, { useState } from "react";

export default function StreamWebcamCard({
	className,
	children,
	onClick,
}: {
	className?: string;
	children?: React.ReactElement;
	onClick?: React.MouseEventHandler<HTMLDivElement>;
}) {
	const [active, setActive] = useState<boolean>(true);

	return (
		<Card className={cn(`col-span-4`, className)} onClick={onClick}>
			<CardHeader>
				<CardTitle className="text-2xl flex items-center justify-between">
					Stream from Webcam
					<div className="rounded-full hidden md:block bg-emerald-600/20 p-2">
						<Video className="size-5 text-emerald-600" />
					</div>
					{children}
				</CardTitle>
				<CardDescription className="max-sm:max-w-96">
					Capture real-time gestures using your webcam & start recognizing
					instantly{" "}
				</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col md:flex-row gap-3">
				<Select>
					<SelectTrigger className="rounded-full h-10 pl-4 bg-primary-foreground">
						<div className="flex items-center gap-2">
							<Video />
							<SelectValue placeholder="UHD Camera" />
						</div>
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectItem value="uhd">UHD Camera</SelectItem>
							<SelectItem value="facetime">Facetime UHD Camera</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
				<Button
					size={"lg"}
					variant={"default"}
					className="rounded-full gap-3"
					aria-label="Adjust Camera"
				>
					<Settings2 className="scale-125" />
					Adjust Camera
				</Button>
			</CardContent>
			<CardFooter className="flex flex-col md:flex-row gap-4 -mt-1">
				<Button
					size={"lg"}
					variant={"tertiary"}
					className="rounded-full gap-3"
					aria-label="Start Webcam"
				>
					<Aperture className="scale-125 text-red-400" />
					Start Webcam
				</Button>
				<span className="text-muted-foreground text-base flex gap-2 cursor-pointer">
					More Settings
					<ChevronDown />
				</span>
			</CardFooter>
		</Card>
	);
}
