import { Fab, Typography, Box } from "@mui/material";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import "./styles.css";
import mainStore from "../../store/store";

const ActionBtn = ({ handleOpenModal }: { handleOpenModal: Function }) => {
	const { cart } = mainStore();

	const cartCalc = () => {
		let result = cart.reduce(
			(acc: number, item: IProduct) => acc + item.price,
			0
		);
		console.log("cart sum -->", result);
		return result;
	};

	const handleCheckout = () => {
		handleOpenModal();
	};

	return (
		<Fab
			variant='extended'
			size='large'
			aria-label='add'
			className='btn-add'
			onClick={handleCheckout}
		>
			<Box sx={{ ml: 1, mt: 1 }}>
				<Typography component='p'>{cart.length} items</Typography>
				<Typography component='p'>total: {cartCalc()}</Typography>
			</Box>
			<RoomServiceIcon sx={{ ml: 1 }} />
		</Fab>
	);
};

export default ActionBtn;
