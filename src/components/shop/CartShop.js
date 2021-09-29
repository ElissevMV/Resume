import '../../style/shop.css';
import React, { useState } from "react";
import { useSelector } from 'react-redux';
import {
    selectCart,
    selectSum
} from '../../store/itemSlice';
import ItemCart from './ItemCart';



function CartShop() {
    const cart = useSelector(selectCart);
    const sum = useSelector(selectSum); 

    return(
        <div>
            <h3>Ваши покупки:</h3>
            <div className='flex'>
                {cart.map(item => <ItemCart dat={item} key={item}/>)} 
            </div>
            <h3>Общая сумма: {sum}</h3>
        </div>
    )
}
export default CartShop;
