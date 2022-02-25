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

const CardItem = ({
	width,
	btn,
	...item
}: {
	width: string;
	btn: Boolean;
	item: IProduct;
}) => {
	//item: IProduct, width: string, btn: Boolean
	const { addToCart } = mainStore();

	const handleAdd = () => {
		console.log("agregar", item);
		addToCart(item);
	};

	return (
		<Card sx={{ width: width }} key={item.id} className='card-container'>
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
				<Typography component='p' sx={{ color: "#757575" }}>
					$ {item.price}
				</Typography>
			</CardContent>
			{!!btn ? (
				<CardActions className='flex card-icon'>
					<IconButton onClick={handleAdd}>
						<AddBoxIcon fontSize='large' />
					</IconButton>
				</CardActions>
			) : null}
		</Card>
	);
};

export default CardItem;
