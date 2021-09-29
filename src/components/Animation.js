
import '../style/animation.css';

function Animation() {
  

    function star(){
        for(let i = 0; i < 100; i++){
            const newDiv = document.createElement('div');
            newDiv.classList.add('stars');
            const y = Math.floor(Math.random() * window.innerHeight);
            const x = Math.floor(Math.random() * window.innerWidth);
            document.querySelector('div.animation').append(newDiv); 

            let size = Math.random()*3+1;
            newDiv.style.left = x + 'px';
            newDiv.style.top = y + 'px';
            newDiv.style.width = size + 'px';
            newDiv.style.height = size + 'px';

            newDiv.style.animationDuration = 1+ Math.random()*5 + 's';
        }
        document.querySelector('.b_star').textContent =  'Добавить  еще!';
    }
   
    return(

        <div className='animation'>
            <div className='animation_info'>
                <button onClick={star} className='b_star'>Добавить звезд</button>
                <h2>Добро <br/> пожаловать</h2>
            </div>
        </div>
    )
}

export default Animation;