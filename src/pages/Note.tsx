import { Navbar } from "@/components/blocks";
import { useParams } from "react-router";

const Note = () => {
	const params = useParams();
	return (
		<div className="flex flex-col w-full">
			<Navbar title="Notes" />
			<div>Note - {params.note}</div>;
		</div>
	);
};

export default Note;
