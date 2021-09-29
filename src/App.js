import './style/App.css';
import './style/option_page.css';
import './style/nav.css';
import React from "react";
import Animation from './components/Animation';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Error from './components/Error';
import Rps from './components/Rps';
import Shop from './components/shop/Shop';
import CartShop from './components/shop/CartShop';
import Forum from './components/forum/Forum';
import Quiz from './components/Quiz';
import Weather from './components/Weather';
import Resume from './components/shop/Resume';




function App() {

  const rightClick = () =>{   
    document.querySelector('.option_page_left').style.width = 85 + 'vw';
    document.querySelector('.option_page_right').style.width = 15 + 'vw';
    document.querySelector('.arrow_right').style.zIndex = -1;
    document.querySelector('.arrow_left').style.zIndex = 100;
    document.querySelector('.about_me').style.transform = 'rotate(90deg)';
    document.querySelector('.about_me').style.marginTop = 10 + 'vh';
    document.querySelector('.about_me').style.zIndex = 10;
    document.querySelector('.apps').style.zIndex = -1;
    document.querySelector('.about_me').style.right = 5 + 'vw';
    document.querySelector('.all').style.zIndex = 10;
    document.querySelector('.resum').style.zIndex = -10;
}
  const leftClick = () =>{
    document.querySelector('.option_page_left').style.width = 15 + 'vw';
    document.querySelector('.option_page_right').style.width = 85 + 'vw';
    document.querySelector('.arrow_left').style.zIndex = -1;
    document.querySelector('.arrow_right').style.zIndex = 100;
    document.querySelector('.about_me').style.zIndex = -1;
    document.querySelector('.apps').style.zIndex = 10;
    document.querySelector('.apps').style.transform = 'rotate(-90deg)';
    document.querySelector('.apps').style.left = 0;
    document.querySelector('.all').style.zIndex = -1;
    document.querySelector('.resum').style.zIndex = 10;
}

  return (
    <div>
       <Router>
       <section className='option_page'>
            <div className='option_page_left' >
                <div className='arrow_left' onClick={leftClick}>&lt;&lt;</div>
                <div className='apps'>Apps</div>
                <div className='all'>
                <nav className='nav'>
                  <ul>
                    <li><Link to='/optionpage/quiz'>викторина</Link></li>
                    <hr />
                    <li><Link to='/optionpage/weather'>погода</Link></li>
                    <hr />
                    <li><Link to='/optionpage/rps'>игра</Link></li>
                    <hr />
                    <li className='nav_liShop'><Link to='/optionpage/shop'>магазин</Link>
                      <Link to='/optionpage/shop/cart'><img title='корзина' alt='корзина' src="https://img.icons8.com/material-outlined/24/000000/shopping-cart--v1.png"/></Link>
                    </li>
                    <hr />
                    <li className='nav_liForum'><Link to='/optionpage/forum' >форум</Link></li>
                    <hr />
                    <li><Link to='/err' className='href_err'>в разработке</Link></li>
                  </ul>
                 </nav>
                 <Switch>
                 <Route exact path="/optionpage/shop/cart" component={CartShop}/>
                  <Route exact path="/" component={Animation}/>
                  <Route exact path="/optionpage/rps" component={Rps}/>
                  <Route exact path="/optionpage/shop" component={Shop}/>
                  <Route exact path="/optionpage/forum" component={Forum}/>
                  <Route exact path="/optionpage/quiz" component={Quiz}/>
                  <Route exact path="/optionpage/weather" component={Weather}/>
                  <Route component={Error}/>
                </Switch>
                </div>                    
            </div>
            <div className='option_page_right'>
                <div className='arrow_right' onClick={rightClick}>&gt;&gt;</div>
                <div className='about_me'>About me</div>
                <div className='resum'>
                  <Resume />
                </div>
            </div>               
        </section>
     </Router>
    </div>
  );
}

export default App;
