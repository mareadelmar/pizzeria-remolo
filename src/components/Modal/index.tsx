import { Modal as ModalMUI, Box, Typography, Button } from "@mui/material";
import CardItem from "../../components/Card";
import "./styles.css";
import mainStore from "../../store/store.js";

const Modal = ({ open, handleCloseModal }: { open: Boolean }) => {
	const { cart } = mainStore();

	const cartCalc = () => {
		let result = cart.reduce(
			(acc: number, item: IProduct) => acc + item.price,
			0
		);
		return result;
	};

	return (
		<ModalMUI open={open} onClose={handleCloseModal}>
			<Box
				sx={{ width: "80%", maxHeight: "100%" }}
				className='modal-container'
			>
				<Typography component='h4' variant='h4'>
					Mi orden
				</Typography>
				<Typography sx={{ mt: 1 }} component='p'>
					{cart.length} items
				</Typography>
				{cart.map((item: IProduct) => (
					<CardItem
						{...item}
						width='90%'
						btn={false}
						key={item.name}
					/>
				))}
				<Box className='modal-price'>
					<Typography component='p' variant='h6'>
						Items totales:{" "}
					</Typography>
					<Typography component='p' variant='h6'>
						$ {cartCalc()}
					</Typography>
				</Box>
				<Box sx={{ textAlign: "right" }}>
					<Button variant='contained'>Ir al checkout</Button>
				</Box>
			</Box>
		</ModalMUI>
	);
};

export default Modal;
