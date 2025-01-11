import { useParams } from "react-router";

const Note = () => {
	const params = useParams();
	return <div>Note - {params.note}</div>;
};

export default Note;
