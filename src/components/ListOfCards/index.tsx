import { Container } from "@mui/material";
import CardItem from "../Card";

const ListOfCards = ({ products }) => {
	return (
		<Container>
			<div className='list-container'>
				{products.map(item => (
					<CardItem {...item} />
				))}
			</div>
		</Container>
	);
};

export default ListOfCards;
