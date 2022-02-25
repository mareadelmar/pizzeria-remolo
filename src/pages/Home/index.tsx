import ListOfCards from "../../components/ListOfCards";
import ListOfCategories from "../../components/ListOfCategories";
import { useParams } from "react-router-dom";
import CategoryHeader from "../../components/CategoryHeader";
import { Fab, Typography } from "@mui/material";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import { useEffect, useState } from "react";
import mainStore from "../../store/store.js";

const Home = () => {
	const { getCategories, getProducts } = mainStore();
	const { categoryId } = useParams();

	useEffect(() => {
		getCategories();
		getProducts();
	}, []);

	return (
		<>
			<Fab
				variant='extended'
				size='large'
				aria-label='add'
				className='btn-add'
			>
				<Typography component='p'>4 items</Typography>
				<Typography component='p'>440.00</Typography>
				<RoomServiceIcon sx={{ ml: 1 }} />
			</Fab>
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
