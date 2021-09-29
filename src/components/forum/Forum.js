import '../../style/forum.css';
import ForumItem from './ForumItem';
import React, { createRef, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {
    selectForum
} from '../../store/forumSlice';
import { addMassages } from '../../store/forumSlice';


function Forum() {

    const dispatch = useDispatch();
    const refMass = React.createRef();
    const refName = React.createRef();
    const [net, setNot] = useState('');
    const Massages = useSelector(selectForum)
    const send = ()=> {
        if (refMass.current.value.trim().length > 0){
            setNot('');
            dispatch(addMassages([refName.current.value, refMass.current.value]));
        }
        else setNot('Введите сообщение'); 
    }
 
    return(
        <div className='forum'>
            <div className='forumAdd'>
                <h2>Напишите комментарий</h2>
                <input className='forum_name' type="text" placeholder="Ваше имя" ref={refName}/>
                <textarea className="forum_mess" type="text" placeholder="Комментарий" ref={refMass}/>
                <button onClick={send}>Отправить</button>
                <p>{net}</p>
            </div>
            <div className='in'>
            {Massages.map(item => <ForumItem name={item[0]} massage={item[1]} key={item}/>)}
            </div>
            
           
        </div>
    )
}
export default Forum;