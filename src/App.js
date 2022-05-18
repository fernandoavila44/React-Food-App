import React, {useState} from "react";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

const App = () => {

	const [modalShow, setModalShow] = useState(false);

	const handlePressed = () =>{
		setModalShow(prevValue => !prevValue)
	}

	return (
		<CartProvider>
			{modalShow && <Cart isShowed={handlePressed}/>}
			<Header isPressed={handlePressed} />
			<main>
				<Meals />
			</main>
		</CartProvider>
	);
}

export default App;
