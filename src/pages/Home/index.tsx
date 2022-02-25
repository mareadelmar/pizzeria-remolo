import ListOfCards from "../../components/ListOfCards";
import ListOfCategories from "../../components/ListOfCategories";
import { useParams } from "react-router-dom";
import CategoryHeader from "../../components/CategoryHeader";
import { useEffect, useState } from "react";
import mainStore from "../../store/store.js";
import ActionBtn from "../../components/ActionBtn";

const Home = () => {
	const { getCategories, getProducts, cart } = mainStore();
	const { categoryId } = useParams();

	useEffect(() => {
		getCategories();
		getProducts();
	}, []);

	console.log(cart);

	return (
		<>
			<ActionBtn />
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
