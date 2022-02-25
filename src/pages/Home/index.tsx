import ListOfCards from "../../components/ListOfCards";
import ListOfCategories from "../../components/ListOfCategories";
import { useParams } from "react-router-dom";
import CategoryHeader from "../../components/CategoryHeader";
import { useEffect, useState } from "react";
import ActionBtn from "../../components/ActionBtn";
import Modal from "../../components/Modal";
import mainStore from "../../store/store";

const Home = () => {
	const { getCategories, getProducts } = mainStore();
	const { categoryId } = useParams();
	const [open, setOpen] = useState<Boolean>(false);

	const handleCloseModal = () => {
		setOpen(false);
	};

	const handleOpenModal: Function = () => {
		setOpen(true);
	};

	useEffect(() => {
		getCategories();
		getProducts();
	}, []);

	return (
		<>
			<Modal open={open} handleCloseModal={handleCloseModal} />
			<ActionBtn handleOpenModal={handleOpenModal} />
			{categoryId ? (
				<CategoryHeader categoryId={categoryId} />
			) : (
				<CategoryHeader />
			)}
			<ListOfCategories categoryId={categoryId} />
			<ListOfCards categoryId={categoryId} />
		</>
	);
};

export default Home;
