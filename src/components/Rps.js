import '../style/rps.css';
import React, { createRef, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {
    selectRps
} from '../store/rpsSlice';
import { twoPlayers } from '../store/rpsSlice';

function Rps() {
    const rps= useSelector(selectRps);
    const dispatch = useDispatch();

    const [players, setPlayers] = useState('Вы играете против компьютера');
    const [player1, setPlayer1] = useState(0);
    const [player2, setPlayer2] = useState(0);
    const [enemy, setEnemy] = useState('Игрок 2(ИИ)');
    const [winner, setWinner] = useState('?');
    const [ppl, setPpl] = useState('Игрок 1');
    const [item1, setItem1] = useState('?');
    const [item2, setItem2] = useState('?');
    const arrItem = ['камень', 'ножницы', 'бумага', 'ящерица', 'спок'];
    let select = React.createRef();
    let exPpl = React.createRef();
    let p1, p2;
    
    
    function choiceComp() {
        const min = 0;
        const max = 4;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function goPlay(p1, p2) {
        let win = '';
        if (p1 === p2 ) win = 'draw';
        else if  (p1 == 'камень' && (p2 == 'ящерица' || p2 == 'ножницы')) win = 'p1win';
        else if  (p1 == 'ножницы' && (p2 == 'бумага' || p2 == 'ящерица')) win = 'p1win';
        else if  (p1 == 'бумага' && (p2 == 'спок' || p2 == 'камень')) win = 'p1win';
        else if  (p1 == 'ящерица' && (p2 == 'бумага' || p2 == 'спок')) win = 'p1win';
        else if  (p1 == 'спок' && (p2 == 'камень' || p2 == 'ножницы')) win = 'p1win';
        else win = 'p2win';
        winPlay(win);
    }
    function winPlay(win){
        if (win === 'p1win') {setPlayer1(player1+1); setWinner('победил: игрок 1');}
        else if (win === 'p2win') {setPlayer2(player2+1); setWinner('победил: игрок 2');}
        else if (win === 'draw') setWinner('ничья');
    }
    let ChangeSelect = () => {
        let sel = select.current.value;
        if (sel == 1) {
            setPlayers('Вы играете против компьютера'); 
            setEnemy('Игрок 2(ИИ)');
            }
        else if (sel == 2) {
            setPlayers('Играет два игрока');
            setEnemy('Игрок 2');
            }
            setPpl('Игрок 1');
            setPlayer1(0);
            setPlayer2(0);
    }

    let goToPlay = (event) => {
        if (select.current.value == '1'){
            p1 = event.target.title;
            p2 = arrItem[choiceComp()];
            setItem1(p1);
            setItem2(p2);
            goPlay(p1, p2);
        }
        else {
            let ex = exPpl.current.textContent;
            if (ex == 'Ходит Игрок 1') {
                setPpl('Игрок 2');
                dispatch(twoPlayers(event.target.title));
            }
            else {
                p2 = event.target.title;  
                p1 = rps.player1;
                setPpl('Игрок 1');
                goPlay(p1, p2);
                setItem1(p1);
                setItem2(p2);
            }
        }
    }
    

    return(
        <div className='rps_all'>
            <h2>Игра "Камень-ножницы-бумага-ящерица-спок"</h2>
            <div>
            Выберите количество игроков 
                <select onChange={ChangeSelect} ref={select}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
            </div>
            <p>{players}</p>
            <p>Счет:</p>
            <p>Игрок 1: {player1}</p>
            <p>{enemy}: {player2}</p>
            <p>Игрок 1 выбирал - {item1} || {enemy} выбирал - {item2}</p>
            <p>В этом раунде {winner}</p>
            <p ref={exPpl}>Ходит {ppl}</p>
            <div className='rpsIcon' onClick={goToPlay}>
                <button><img src="https://img.icons8.com/ios/50/000000/clenched-fist.png" alt='камень' title='камень'/></button>
                <button><img src="https://img.icons8.com/ios/50/000000/hand-peace--v1.png" alt='ножницы' title='ножницы'/></button>
                <button><img src="https://img.icons8.com/pastel-glyph/64/000000/hand--v2.png" alt='бумага' title='бумага'/></button>
                <button><img src="https://img.icons8.com/ios/50/000000/hand-lizard.png" alt='ящерица' title='ящерица'/></button>
                <button><img src="https://img.icons8.com/ios/50/000000/star-trek-gesture.png" alt='спок' title='спок'/></button>
            </div>
        </div>
    )
}
export default Rps;