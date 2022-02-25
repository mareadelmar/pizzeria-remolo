import "./styles.css";
import { Container, Typography } from "@mui/material";
import mainStore from "../../store/store";

type CategoriesHeaderComponent = {
	categoryId?: CategoryId;
};

const CategoryHeader = ({ categoryId }: CategoriesHeaderComponent) => {
	const { categories } = mainStore();

	return (
		<Container>
			{categoryId && categories ? (
				categories.map((item: ICategory) => {
					if (item.category === categoryId) {
						return (
							<Container
								className='header-container'
								key={item.category}
							>
								<Typography component='h2' variant='h4'>
									{item.title}
								</Typography>
								<Typography component='p'>
									{item.description}
								</Typography>
							</Container>
						);
					}
				})
			) : (
				<Container className='header-container'>
					<Typography component='h2' variant='h4'>
						Nuestros productos
					</Typography>
					<Typography component='p'>
						Selecciona entre nuestras categorías
					</Typography>
				</Container>
			)}
		</Container>
	);
};

export default CategoryHeader;
