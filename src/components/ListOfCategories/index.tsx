import { Container, IconButton } from "@mui/material";
import CakeIcon from "@mui/icons-material/Cake";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import { Link } from "react-router-dom";
import "./styles.css";

const categoryIcon: any = {
	dessert: <CakeIcon fontSize='large' />,
	drink: <LocalBarIcon fontSize='large' />,
	pizza: <LocalPizzaIcon fontSize='large' />,
};

type CategoriesListComponent = {
	categoryId?: CategoryId;
	categoriesList: ICategory[];
};

const ListOfCategories = ({
	categoryId,
	categoriesList,
}: CategoriesListComponent) => {
	return (
		<Container>
			<div className='flex categories-container'>
				{categoriesList.length > 0 &&
					categoriesList.map((item: ICategory) => (
						<Link
							key={item.category}
							to={`/products/${item.category}`}
							id={
								categoryId && categoryId === item.category
									? "category-highlight-icon"
									: "category-icon"
							}
						>
							<IconButton disableRipple={true} color='inherit'>
								{categoryIcon[item.category]}
							</IconButton>
						</Link>
					))}
			</div>
		</Container>
	);
};

export default ListOfCategories;
