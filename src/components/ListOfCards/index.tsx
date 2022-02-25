import { useState, useEffect } from "react";
import { Container } from "@mui/material";
import CardItem from "../Card";
import "./styles.css";
import { db } from "../../config/firebaseConfig.js";

const ListOfCards = ({ categoryId }) => {
	const [filterProducts, setFilterProducts] = useState([]);
	const [productList, setProductList] = useState([]);

	useEffect(() => {
		const ref = db.collection("products");
		let data = [];

		ref.get().then(doc => {
			if (doc) {
				doc.forEach(item => {
					console.log(item.data());
					data.push(item.data());
				});
			}
		});
		console.log(data);
		setProductList(data);
	}, []);

	useEffect(() => {
		if (categoryId) {
			const newList = productList.filter(
				item => item.category === categoryId
			);
			setFilterProducts(newList);
		} else {
			setFilterProducts(productList);
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
