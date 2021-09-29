import '../../style/shop.css';
import React, { useState } from "react";
import { useSelector } from 'react-redux';
import {
    selectItem
} from '../../store/itemSlice';
import ItemShop from './ItemShop';



function Shop() {


    const sItem = useSelector(selectItem);
    
    const [itemArr, setItemArr] = useState(sItem);
    const filterItem = (event) => {
        let arr = [];
        if (event.target.value == 'fruit'){
            for (let i of sItem) {
                if (i.type == 'fruit')
                arr.push(i);
            }
        }
        else if (event.target.value == 'vegetable'){
            for (let i of sItem) {
                if (i.type == 'vegetable')
                arr.push(i);
            }
        }
        else arr = sItem;
        setItemArr(arr);
    }

    return(
        <div>
            <h2>Магазин</h2>
            <p>Филтр</p>
            <select onChange={filterItem}>
                <option value="all">Все</option>
                <option value="vegetable">Овощи</option>
                <option value="fruit">Фрукты</option>
            </select>
            <section className='shopAll_items'>
                {itemArr.map(item => <ItemShop key={item.article} img={item.img} cost={item.cost} article={item.article} name={item.name}/>)}
            </section>
            <p>Перейдите в корзину для просмотра товаров</p>           
        </div>
    )
}
export default Shop;