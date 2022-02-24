import { useState, useEffect } from "react";
import { Container } from "@mui/material";
import CardItem from "../Card";
import "./styles.css";

const ListOfCards = ({ products, categoryId }) => {
	const [filterProducts, setFilterProducts] = useState();

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

	return (
		<Container>
			<div className='list-container'>
				{filterProducts &&
					filterProducts.map(item => (
						<CardItem {...item} key={item.id} />
					))}
			</div>
		</Container>
	);
};

export default ListOfCards;
