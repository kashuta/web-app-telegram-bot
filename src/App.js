import './App.css';
import Card from "./Components/Card/Card";
import Cart from "./Components/Cart/Cart";
import {useEffect, useState} from "react";

const {getData} = require("./db/db");

const foods = getData();
const tele = window.Telegram.WebApp;

function App() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        tele.ready();
    });

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
    const onCheckout = () => {
        tele.MainButton.text = "Оформить заказ";
        tele.MainButton.show();
    }

    return (
        <>
            <h1 className="heading">www.artka.dev</h1>
            <Cart cartItems={cartItems} onCheckout={onCheckout}/>
            <div className="cards__container">
                {foods.map(food => {
                    return (<Card food={food} key={food.id} onAdd={onAdd} onRemove={onRemove}/>)
                })}
            </div>
        </>
    );
}

export default App;
