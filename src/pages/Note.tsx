import { Navbar } from "@/components/blocks";
import { useParams } from "react-router";

const Note = () => {
	const params = useParams();
	return (
		<div className="flex flex-col w-full">
			<Navbar title="Folders" />
			<div className="flex p-4">
				<h1 className="text-3xl capitalize font-semibold">
					{params.note?.replace("-", " ")}
				</h1>
			</div>
		</div>
	);
};

export default Note;
