import { useState, useEffect } from "react";
import { Container } from "@mui/material";
import CardItem from "../Card";
import "./styles.css";
import { db } from "../../config/firebaseConfig.js";

type ListCardsComponent = {
	categoryId?: CategoryId;
};

const ListOfCards = ({ categoryId }: ListCardsComponent) => {
	const [filterProducts, setFilterProducts] = useState<IProduct[]>([]);
	const [productList, setProductList] = useState<IProduct[]>([]);

	useEffect(() => {
		const ref = db.collection("products");
		let data: IProduct[] = [];

		ref.get().then((doc: any) => {
			if (doc) {
				doc.forEach((item: any) => {
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
					filterProducts.map((item: IProduct) => (
						<CardItem {...item} key={item.id} />
					))}
			</div>
		</Container>
	);
};

export default ListOfCards;
