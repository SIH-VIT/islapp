import { useParams } from "react-router";

const Folder = () => {
	const params = useParams();
	return <div>Folder - {params.folder}</div>;
};

export default Folder;
