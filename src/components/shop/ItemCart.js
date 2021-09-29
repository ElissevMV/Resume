function ItemCart(props) {

    return(
        <div>
            <div className='cart_item' key={props.dat}>
                <img src={props.dat[0]} alt={props.dat[1]} />  
                <div>
                    <p>{props.dat[1]}</p>
                    <p>Цена за 1шт: {props.dat[2]}</p>
                    <p>В корзине {props.dat[3]}шт</p>
                    <p>итого: {props.dat[2]*props.dat[3]}</p>
                </div> 
                </div>
        </div>
    )
}
export default ItemCart;