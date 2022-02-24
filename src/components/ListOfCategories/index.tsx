import { Container, IconButton } from "@mui/material";
import CakeIcon from "@mui/icons-material/Cake";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import { Link } from "react-router-dom";

const CATEGORIES = {
	dessert: "dessert",
	drink: "drink",
	pizza: "pizza",
};

const ListOfCategories = ({ categoryId }) => {
	return (
		<Container>
			<div className='flex categories-container'>
				<Link
					to={`/products/${CATEGORIES.drink}`}
					id={
						categoryId === "drink"
							? "category-highlight-icon"
							: "category-icon"
					}
				>
					<IconButton disableRipple={true} color='inherit'>
						<LocalBarIcon fontSize='large' />
					</IconButton>
				</Link>
				<Link
					to={`/products/${CATEGORIES.dessert}`}
					id={
						categoryId === "dessert"
							? "category-highlight-icon"
							: "category-icon"
					}
				>
					<IconButton color='inherit'>
						<CakeIcon fontSize='large' />
					</IconButton>
				</Link>
				<Link
					to={`/products/${CATEGORIES.pizza}`}
					id={
						categoryId === "pizza"
							? "category-highlight-icon"
							: "category-icon"
					}
				>
					<IconButton color='inherit'>
						<LocalPizzaIcon fontSize='large' />
					</IconButton>
				</Link>
			</div>
		</Container>
	);
};

export default ListOfCategories;
