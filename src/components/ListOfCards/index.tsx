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
				(item: IProduct) => item.category === categoryId
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
				{filterProducts.length > 0 &&
					filterProducts.map((item: IProduct) => (
						<CardItem
							{...item}
							width='200'
							btn={true}
							key={item.id}
						/>
					))}
			</div>
		</Container>
	);
};

export default ListOfCards;
