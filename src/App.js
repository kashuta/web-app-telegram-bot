import './App.css';
import Card from "./Components/Card/Card";
import Cart from "./Components/Cart/Cart";
import {useState} from "react";

const {getData} = require("./db/db");

const foods = getData();

function App() {
    const [cartItems, setCartItems] = useState([]);
    //Cart checking
    const onAdd = (food) => {
        const exist = cartItems.find((el) => el.id === food.id)
        if (exist) {
            setCartItems(cartItems.map((el) => el.id === food.id ? {...exist, quantity: exist.quantity + 1} : el))
        } else {
            setCartItems([...cartItems, {...food, quantity: 1}])
        }
    }
    const onRemove = (food) => {
        const exist = cartItems.find((el) => el.id === food.id)
        if (exist.quantity === 1) {
            setCartItems(cartItems.filter((el) => el.id !== food.id))
        } else {
            setCartItems(cartItems.map((el) => el.id === food.id ? {...exist, quantity: exist.quantity - 1} : el))
        }
    }


    return (
        <>
            <h1 className="heading">www.artka.dev</h1>
            <Cart cartItems={cartItems}/>
            <div className="cards__container">
                {foods.map(food => {
                    return (<Card food={food} key={food.id} onAdd={onAdd} onRemove={onRemove}/>)
                })}
            </div>
        </>
    );
}

export default App;
