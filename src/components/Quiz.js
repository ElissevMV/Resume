import React, { useState } from "react";
import '../style/quiz.css';
import { useSelector, useDispatch } from 'react-redux';
import {
    selectNumber
} from '../store/rpsSlice';
import { numPlus } from '../store/rpsSlice';

function Quiz() {

    const dispatch = useDispatch();
    const numberArr = useSelector(selectNumber);
    
    const quiz = [
        ['Неправильный вариант', 'Неправильный вариант', 'Находит и возвращает первое истинное значение', 'Неправильный вариант', '2'],
        ['Неправильный вариант', 'Неправильный вариант', 'Неправильный вариант', 'Самым быстрым способом преобразования строки в число', '3'],
        ['Неправильный вариант', 'Неправильный вариант', 'Это элемент, в котором происходит событие', 'Неправильный вариант', '2'],
        ['Это элемент, к которому прикреплен прослушиватель событий.', 'Неправильный вариант', 'Неправильный вариант', 'Неправильный вариант', '0'],
        [' Первый сравнивает значения после их преобразования, а второй — без такого преобразования', 'Неправильный вариант', 'Неправильный вариант', 'Неправильный вариант', '0'],
        ['Неправильный вариант', 'Неправильный вариант', 'Неправильный вариант', 'Приводит значение справа от него к логическому значению', '3'],
        ['Неправильный вариант', 'Неправильный вариант', 'Для этого мы можем использовать оператор "," (запятая)', 'Неправильный вариант', '2'],
        ['Неправильный вариант', 'Строгий режим вводит некоторые ограничения по написанию кода, тем самым позволяя избегать ошибок на ранних этапах', 'Неправильный вариант', 'Неправильный вариант', '1'],
        ['Неправильный вариант', 'Неправильный вариант', 'Неправильный вариант', 'Ссылается на значение объекта, который в данный момент выполняет или вызывает функцию', '3'],
        ['(function(){})()', 'Неправильный вариант', 'Неправильный вариант', 'Неправильный вариант', '0'],
        ['Неправильный вариант', 'Неправильный вариант', 'Используется для привязки определенного объекта к значению this вызываемой функции', 'Неправильный вариант', '2'],
        ['Отличие состоит в том, что в apply аргументы передаются в виде массива', 'Неправильный вариант', 'Неправильный вариант', 'Неправильный вариант', '0'],
        ['Неправильный вариант', 'Используется в функциях-конструкторах для создания нового объекта (нового экземпляра класса)', 'Неправильный вариант', 'Неправильный вариант', '1'],
        ['Это спецификация, стандарт скриптовых языков программирования, он является основой JS', 'Неправильный вариант', 'Неправильный вариант', 'Неправильный вариант', '0'],
        ['Модули позволяют объединять (использовать) код из разных файлов и избавляют нас от необходимости держать весь код в одном большом файле', 'Неправильный вариант', 'Неправильный вариант', 'Неправильный вариант', '0']
    ]    
    
    const question = [
        ['Для чего используется оператор "||"?'],
        ['Оператор "+" является -'],
        ['Что такое (event.target)?'],
        ['Что такое текущая цель события (event.currentTarget)?'],
        ['В чем разница между операторами "==" и "==="?'],
        ['Для чего используется оператор "!!"?'],
        ['Как записать несколько выражений в одну строку?'],
        ['Что такое «use strict»?'],
        ['Какое значение имеет this?'],
        ['Как выгляди IIFE?'],
        ['Для чего используется метод Function.prototype.apply?'],
        ['В чет отличия Function.prototype.apply от Function.prototype.call'],
        ['Для чего используется ключевое слово «new»'],
        ['Что такое ECMAScript?'],
        ['Что такое модули (Modules)?']
    ];

    const [q1, setQ1] = useState(quiz[numberArr][0]);
    const [q2, setQ2] = useState(quiz[numberArr][1]);
    const [q3, setQ3] = useState(quiz[numberArr][2]);
    const [q4, setQ4] = useState(quiz[numberArr][3]);
    const [quest, setQuest] = useState(question[0][numberArr]);
    

    const optionClick = (event)=> {
        if (event.target.name == 5);
        else {
            const allOptoon = document.querySelectorAll('option.quiz_answer');
            let click = event.target.value;
            if (click == quiz[numberArr][4]){
                event.target.classList.add('best');
            }
            else {
                event.target.classList.add('wrong');
                allOptoon.forEach((item) => {
                    if (item.value == quiz[numberArr][4]) item.classList.add('best');
                });
            }
        }
    }

    const nextClick = ()=> {
        const allOptoon = document.querySelectorAll('option.quiz_answer');  
        allOptoon.forEach((item) => {
            item.classList.remove('wrong');
            item.classList.remove('best');
        });
        if (question[numberArr][0] == question[13][0]) {
            setQ1('конец');
            setQ2('конец');
            setQ3('конец');
            setQ4('конец');
            setQuest('Вопросы закончились');
        }
        else {
            setQ1(quiz[numberArr+1][0]);
            setQ2(quiz[numberArr+1][1]);
            setQ3(quiz[numberArr+1][2]);
            setQ4(quiz[numberArr+1][3]);
            setQuest(question[numberArr+1][0]);
            dispatch(numPlus(numberArr));
        }
    }

    return(
        <div className='quiz'>
            <h2>Викторина</h2>
            <h4>Вопрос:</h4>    
            <p>{quest}</p>
            <form onClick={optionClick} name='5' className='form_block'>
                <option className='quiz_answer' value='0'>{q1}</option>
                <option className='quiz_answer' value='1'>{q2}</option>
                <option className='quiz_answer' value='2'>{q3}</option>
                <option className='quiz_answer' value='3'>{q4}</option>
            </form>
            <button onClick={nextClick} className='quiz_b'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Следующий вопрос
            </button>
        </div>
    )
}
export default Quiz;