import {
	Card,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
	IconButton,
} from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import "./styles.css";
import mainStore from "../../store/store";

const CardItem = (item: IProduct) => {
	const { addToCart } = mainStore();

	const handleAdd = () => {
		console.log("agregar", item);
		addToCart(item);
	};

	return (
		<Card sx={{ width: 180 }} key={item.id} className='card-container'>
			<CardMedia
				component='img'
				height='180'
				image={item.img}
				alt={item.name}
			/>
			<CardContent>
				<Typography component='h2' variant='h6'>
					{item.name}
				</Typography>
				<Typography component='p'>{item.price}</Typography>
			</CardContent>
			<CardActions className='flex card-icon'>
				<IconButton onClick={handleAdd}>
					<AddBoxIcon fontSize='large' />
				</IconButton>
			</CardActions>
		</Card>
	);
};

export default CardItem;
