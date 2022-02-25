import "./styles.css";
import { Container, Typography } from "@mui/material";

const CategoryHeader = ({ categoryId, categoriesList }) => {
	return (
		categoriesList.length > 0 &&
		categoriesList.map(item => {
			if (item.category === categoryId) {
				return (
					<Container className='header-container' key={item.category}>
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
	);
};

export default CategoryHeader;
