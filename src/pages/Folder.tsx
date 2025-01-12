import { Navbar } from "@/components/blocks";
import { useParams } from "react-router";

const Folder = () => {
	const params = useParams();
	return (
		<div className="flex flex-col w-full">
			<Navbar title="Folders" />
			<div>Folder - {params.folder}</div>;
		</div>
	);
};

export default Folder;
