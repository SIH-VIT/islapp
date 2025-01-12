import { Navbar } from "@/components/blocks";
import {
	StreamWebcamCard,
	UploadVideoCard,
	VoiceInputCard,
	TextInputCard,
} from "@/components/blocks/Dashboard";

export default function Dashboard() {
	return (
		<div className="w-full flex flex-col items-center relative">
			<Navbar
				title="Home"
				className="sticky top-0 right-0 backdrop-blur-3xl z-50"
			/>
			<div className="grid grid-cols-1 md:grid-cols-7 max-sm:my-2 max-sm:p-0 p-4 w-full gap-4">
				<StreamWebcamCard className="col-span-4" />
				<UploadVideoCard className="col-span-3" />
				<VoiceInputCard className="col-span-3" />
				<TextInputCard className="col-span-4" />
			</div>
		</div>
	);
}
