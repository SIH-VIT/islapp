import { CloudUpload, Videotape } from "lucide-react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib";

export default function UploadVideoCard({
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
					Upload a Video
					<div className="rounded-full hidden md:block bg-purple-500/20 p-2">
						<Videotape className="size-5 text-purple-600" />
					</div>
					{children}
				</CardTitle>
				<CardDescription className="max-sm:max-w-96">
					Upload a video file to analyze gestures from your files
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="border-2 border-dashed dark:border-primary-foreground rounded-lg flex flex-col gap-1 p-6 py-5 items-center cursor-pointer hover:animate-pulse">
					<CloudUpload className="size-8" />
					<span className="text-sm text-gray-500">
						Drag and drop a file or click to browse
					</span>
				</div>
			</CardContent>
		</Card>
	);
}
