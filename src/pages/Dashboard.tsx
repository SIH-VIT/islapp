import { Navbar } from "@/components/blocks";
import {
	StreamWebcamCard,
	UploadVideoCard,
	// VoiceInputCard,
	// TextInputCard,
} from "@/components/blocks/Dashboard";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Paperclip, Video } from "lucide-react";

export default function Dashboard() {
	return (
		<div className="w-full flex flex-col items-center relative">
			<Navbar
				title="Home"
				className="sticky top-0 right-0 backdrop-blur-3xl z-50"
			/>
			<div className="grid grid-cols-1 grid-rows-[auto] md:grid-cols-7 max-sm:my-2 max-sm:p-0 p-4 w-full gap-4">
				<StreamWebcamCard className="col-span-4" />
				<UploadVideoCard className="col-span-3" />
				{/* <VoiceInputCard className="col-span-3" />
				<TextInputCard className="col-span-4" /> */}
				<Card className={"col-span-7"}>
					<CardHeader>
						<CardTitle className="text-2xl flex items-center justify-between">
							Your Transcriptions
							<div className="rounded-full hidden md:block bg-red-600/20 p-2">
								<Paperclip className="size-5 text-red-600" />
							</div>
						</CardTitle>
						<CardDescription className="max-sm:max-w-96">
							All your transcriptions stored in one place{" "}
						</CardDescription>
					</CardHeader>
					<CardContent className="flex flex-col md:flex-row gap-3">
						<div className="gap-3 flex flex-col items-center justify-center w-full h-full text-center text-gray-500">
							<div className="rounded-full hidden md:block bg-emerald-600/20 p-4">
								<Video className="size-10 text-emerald-600" />
							</div>
							<p className="text-lg">No transcriptions available</p>
							<p className="text-sm">Your transcriptions will appear here once you have uploaded videos.</p>
						</div>
					</CardContent>
					<CardFooter className="flex flex-col md:flex-row gap-4 -mt-1">
						
					</CardFooter>
				</Card>
			</div>
		</div>
	);
}
