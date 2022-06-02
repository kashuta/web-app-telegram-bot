import React, {useState} from 'react';
import Button from "../Button/Button";
import "./Card.css"

function Card({food}) {
    const {title, price, Image} = food;
    console.log(food.title)
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count + 1)
    }
    const handleDecrement = () => {
        setCount(count - 1)
    }

    return (
        <div className="card">
            <span className={`${count !== 0 ? 'card__badge' : 'card__badge-hidden'}`}>
            {count}
            </span>
            <div className="image__container">
                <img src={Image} alt={title}/>
            </div>
            <h4 className="card__title">
                {title} <span className="card__price">{price}</span>
            </h4>
            <div className="btn__container">
                <Button title={'+'} type={"Добавить"} onClick={handleIncrement}/>
                {count !== 0 ? (
                    <Button title={"-"} type={"Удалить"} onClick={handleDecrement}/>
                ) : ('')}
            </div>

        </div>
    );
}

export default Card;
