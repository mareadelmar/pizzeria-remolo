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

const CardItem = (item: IProduct) => {
	const handleAdd = () => {
		console.log("agregar", item);
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
				<IconButton>
					<AddBoxIcon fontSize='large' />
				</IconButton>
			</CardActions>
		</Card>
	);
};

export default CardItem;
