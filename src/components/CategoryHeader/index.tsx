import "./styles.css";
import { Container, Typography } from "@mui/material";

type CategoriesHeaderComponent = {
	categoryId?: CategoryId;
	categoriesList?: ICategory[];
};

const CategoryHeader = ({
	categoryId,
	categoriesList,
}: CategoriesHeaderComponent) => {
	return (
		<Container>
			{categoryId && categoriesList ? (
				categoriesList.map((item: ICategory) => {
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
