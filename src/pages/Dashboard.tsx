import { Navbar } from "@/components/blocks";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
	Aperture,
	CloudUpload,
	Video,
	Videotape,
	Settings2,
	ChevronDown,
	TextCursor,
	Activity,
	Mic,
	Disc,
} from "lucide-react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
	SelectGroup,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function Dashboard() {
	return (
		<div className="w-full flex flex-col items-center relative">
			<Navbar title="Home" className="sticky top-0 right-0 backdrop-blur-3xl z-50" />
			<div className="grid grid-cols-1 md:grid-cols-7 max-sm:my-2 max-sm:p-0 p-4  w-full gap-4">
				<Card className="col-span-4">
					<CardHeader>
						<CardTitle className="text-2xl flex items-center justify-between">
							Stream from Webcam
							<div className="rounded-full hidden md:block bg-emerald-600/20 p-2">
								<Video className="size-5 text-emerald-600" />
							</div>
						</CardTitle>
						<CardDescription className="max-w-96">
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
				<Card className="col-span-3">
					<CardHeader>
						<CardTitle className="text-2xl flex items-center justify-between">
							Upload a Video
							<div className="rounded-full hidden md:block bg-purple-500/20 p-2">
								<Videotape className="size-5 text-purple-600" />
							</div>
						</CardTitle>
						<CardDescription className="max-w-96">
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
				<Card className="col-span-3">
					<CardHeader>
						<CardTitle className="text-2xl flex items-center justify-between">
							Speak to translate !
							<div className="rounded-full hidden md:block bg-pink-600/20 p-2">
								<Activity className="size-5 text-pink-600" />
							</div>
						</CardTitle>
						<CardDescription className="max-w-96">
							Speak into the microphone to instantly translate your words into
							sign language.
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
				<Card className="col-span-4">
					<CardHeader>
						<CardTitle className="text-2xl flex items-center justify-between">
							Type to transcribe ...
							<div className="rounded-full hidden md:block bg-blue-600/20 p-2">
								<TextCursor className="size-5 text-blue-600" />
							</div>
						</CardTitle>
						<CardDescription className="max-w-96">
							Type down text to transcribe into sign language or upload a
							text/word file
						</CardDescription>
					</CardHeader>
					<CardContent className="flex flex-col gap-4">
						<Textarea
							className="w-full p-2 border rounded-lg bg-background resize-none"
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
			</div>
		</div>
	);
}
