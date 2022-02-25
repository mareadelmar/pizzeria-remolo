import "./styles.css";
import { Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

const NavBar = () => {
	return (
		<Box className='nav-container'>
			<MenuIcon />
			<SearchIcon />
		</Box>
	);
};

export default NavBar;
