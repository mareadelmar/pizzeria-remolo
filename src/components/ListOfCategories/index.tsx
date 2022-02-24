import { Container, IconButton } from "@mui/material";
import CakeIcon from "@mui/icons-material/Cake";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";

const ListOfCategories = () => {
	return (
		<Container>
			<div className='flex categories-container'>
				<IconButton disableRipple={true} href='/'>
					<LocalBarIcon />
				</IconButton>
				<IconButton href='/'>
					<CakeIcon />
				</IconButton>
				<IconButton href='/'>
					<LocalPizzaIcon />
				</IconButton>
			</div>
		</Container>
	);
};

export default ListOfCategories;
