import React from 'react';
import './Button.css'

function Button({type, title, disable, onClick}) {
    return (
        <button className={`btn ${
            (type === 'Добавить' && 'add') ||
            (type === 'Удалить' && 'remove') ||
            (type === 'checkout' && 'checkout')
        }`}
                disabled={disable}
                onClick={onClick}
        >{title}</button>
    );
}

export default Button;
