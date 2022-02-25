import "./App.css";
import Home from "./pages/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/products/:categoryId' element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
