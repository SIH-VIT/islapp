import { useState } from "react";
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
}: {
	className?: string;
	children?: React.ReactElement;
}) {
	const [prediction, setPrediction] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);

	const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
		setPrediction(null);
		const file = event.target.files?.[0];
		if (!file) return;

		const formData = new FormData();
		formData.append("file", file);

		setLoading(true);
		try {
			const response = await fetch("http://localhost:8000/upload/", {
				method: "POST",
				body: formData,
			});
			const data = await response.json();
			setPrediction(data.prediction);
		} catch (error) {
			console.error("Upload failed:", error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<Card className={cn("col-span-3", className)}>
			<CardHeader>
				<CardTitle className="text-2xl flex items-center justify-between">
					Upload a Video
					<div className="rounded-full hidden md:block bg-purple-500/20 p-2">
						<Videotape className="size-5 text-purple-600" />
					</div>
					{children}
				</CardTitle>
				<CardDescription className="max-sm:max-w-96">
					Upload a video file to analyze gestures.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<label className="border-2 border-dashed dark:border-primary-foreground rounded-lg flex flex-col gap-1 p-6 py-5 items-center cursor-pointer hover:animate-pulse">
					<CloudUpload className="size-8" />
					<span className="text-sm text-gray-500">Click to browse a file</span>
					<input type="file" className="hidden" onChange={handleUpload} />
				</label>

				{loading && <p className="text-center mt-4">Processing...</p>}
				{prediction && (
					<p className="text-center mt-4 font-semibold">
						Prediction: {prediction}
					</p>
				)}
			</CardContent>
		</Card>
	);
}
