import { useState, useEffect } from "react";
import { Container } from "@mui/material";
import CardItem from "../Card";
import "./styles.css";
import mainStore from "../../store/store";

type ListCardsComponent = {
	categoryId?: CategoryId;
};

const ListOfCards = ({ categoryId }: ListCardsComponent) => {
	const [filterProducts, setFilterProducts] = useState<IProduct[]>([]);
	const { products } = mainStore();

	useEffect(() => {
		if (categoryId) {
			const newList = products.filter(
				item => item.category === categoryId
			);
			setFilterProducts(newList);
		} else {
			setFilterProducts(products);
		}
	}, [categoryId]);

	if (!products.length) return <label>cargando...</label>;
	return (
		<Container>
			<div className='list-container'>
				{filterProducts &&
					filterProducts.map((item: IProduct) => (
						<CardItem {...item} key={item.id} />
					))}
			</div>
		</Container>
	);
};

export default ListOfCards;
