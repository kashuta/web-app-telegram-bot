import React from 'react';
import "./Cart.css"
import Button from "../Button/Button";

function Cart({cartItems, onCheckout}) {
    const totalPrice = cartItems.reduce((acc, el) => acc + el.price * el.quantity, 0);

    return (
        <div className="cart__container">
            {cartItems.length === 0 ? "Ваш заказ :" : ""}
            <br/>
            <span className=""> Итого ₽: {totalPrice.toFixed(2)}</span>
            <Button title={`${cartItems.length === 0 ? "Заказать" : "Оплата"}`}
                    type={"checkout"}
                    disable={cartItems.length === 0}
                    onClick={onCheckout}
            />

        </div>
    );
}

export default Cart;
