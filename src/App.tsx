import "./App.css";
import Home from "./pages/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/products/:categoryId' element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
