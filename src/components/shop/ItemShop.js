import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addInCart } from '../../store/itemSlice';

function ItemShop(props) {

    const dispatch = useDispatch();
    const [itemCount, setItemCount] = useState(1);
    let itemPlus = () => {setItemCount(itemCount+1)};
    let itemMinus = () => { if (itemCount > 1) setItemCount(itemCount-1)};
    let addItem = () => {
        dispatch(addInCart([props.img, props.name, props.cost, itemCount]));
    }
    
    return(
        <div className="item_block">
            <img src={props.img} alt={props.name} />
            <div className='line'></div>
            <div className='item_info'>
                <p>{props.name}</p>
                <p>Цена за 1шт: {props.cost}</p>
                <div className='item_plus_minus'>
                    <button onClick={itemMinus}>-</button>
                        <div>{itemCount}</div>
                    <button onClick={itemPlus}>+</button>
                </div>
                <button onClick={addItem}>Добавить в корзину</button>
            </div>
        </div>
    )
}

export default ItemShop;