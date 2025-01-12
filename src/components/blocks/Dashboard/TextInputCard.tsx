import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib";
import { TextCursor } from "lucide-react";

export default function TextInputCard({
	className,
	children,
	onClick,
}: {
	className?: string;
	children?: React.ReactElement;
	onClick?: React.MouseEventHandler<HTMLDivElement>;
}) {
	return (
		<Card className={cn("col-span-4", className)} onClick={onClick}>
			<CardHeader>
				<CardTitle className="text-2xl flex items-center justify-between">
					Type to translate ...
					<div className="rounded-full hidden md:block bg-blue-600/20 p-2">
						<TextCursor className="size-5 text-blue-600" />
					</div>
					{children}
				</CardTitle>
				<CardDescription className="max-sm:max-w-96">
					Type down text to translate into sign language or upload a text/word
					file
				</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-4 -mt-1">
				<Textarea
					className="w-full p-3 border-none rounded-lg bg-primary-foreground/20 resize-none"
					placeholder="Type your text here..."
					rows={5}
				></Textarea>
				<div className="flex flex-col md:flex-row items-center gap-3">
					<Button
						size={"lg"}
						variant={"tertiary"}
						className="rounded-full gap-3 w-full md:w-3/4"
						aria-label="Transcribe Text"
					>
						Transcribe Text
					</Button>
					<Button
						size={"lg"}
						variant={"outline"}
						className="rounded-full gap-3 w-full md:w-auto"
						aria-label="Upload file"
					>
						Upload a file
					</Button>
				</div>
			</CardContent>
		</Card>
	);
}
