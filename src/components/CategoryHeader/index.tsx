import "./styles.css";
import { Container, Typography } from "@mui/material";

const CategoryHeader = ({ categories, categoryId }) => {
	return (
		<Container className='header-container'>
			{categories.map(item => {
				if (item.category === categoryId) {
					return (
						<>
							<Typography component='h2' variant='h4'>
								{item.title}
							</Typography>
							<Typography component='p'>
								{item.description}
							</Typography>
						</>
					);
				}
			})}
		</Container>
	);
};

export default CategoryHeader;
