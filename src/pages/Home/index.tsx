import ListOfCards from "../../components/ListOfCards";
import ListOfCategories from "../../components/ListOfCategories";
import { useParams } from "react-router-dom";
import CategoryHeader from "../../components/CategoryHeader";
import { Fab, Typography } from "@mui/material";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import { useEffect, useState } from "react";
import { db } from "../../config/firebaseConfig.js";

const Home = () => {
	const { categoryId } = useParams();
	const [categoriesList, setCategoriesList] = useState<ICategory[]>([]);

	useEffect(() => {
		const ref = db.collection("categories");
		let data: ICategory[] = [];

		ref.get().then((doc: any) => {
			if (doc) {
				doc.forEach((item: any) => {
					data.push(item.data());
				});
			}
		});
		console.log(data);
		setCategoriesList(data);
	}, []);

	//if (categoriesList.length <= 0) return <p>Cargando...</p>;
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
				<CategoryHeader
					categoriesList={categoriesList}
					categoryId={categoryId}
				/>
			) : (
				<CategoryHeader />
			)}
			<ListOfCategories
				categoryId={categoryId}
				categoriesList={categoriesList}
			/>
			<ListOfCards categoryId={categoryId} />
		</>
	);
};

export default Home;
