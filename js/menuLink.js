import {getPopular, getTop, getTriends} from './services.js';
import renderCard from './renderCard.js';

const title=document.querySelector('.other-films__title');
const filmWeek=document.querySelector('.film-week');
const getNav=document.querySelectorAll('.get-nav');

const menuLink=()=>{
    getNav.forEach(nav=>{
        nav.addEventListener('click', (event)=>{
        
            const target=event.target.closest('.get-nav__link');
            if (target){
                event.preventDefault();
                filmWeek.style.display='none';

                if (target.classList.contains('get-nav__link_popular-movies')){
                    title.textContent='Популярные фильмы';
                    getPopular ('movie')
                    .then(data=>renderCard(data.results, 'movie'));
                }
                if (target.classList.contains('get-nav__link_popular-tv')){
                    title.textContent='Популярные сериалы';
                    getPopular ('tv')
                    .then(data=>renderCard(data.results, 'tv'));
                }
                if (target.classList.contains('get-nav__link_top-movies')){
                    title.textContent='Топ фильмов';
                    getTop ('movie')
                    .then(data=>renderCard(data.results, 'movie'));
                }
                if (target.classList.contains('get-nav__link_top-tv')){
                    title.textContent='Топ сериалов';
                    getTop ('tv')
                    .then(data=>renderCard(data.results, 'tv'));
                }
                if (target.classList.contains('get-nav__link_triends')){
                    title.textContent='В тренде';
                    getTriends()
                    .then(data=>renderCard(data.results));
                }
            }
        });
    });
};


export default menuLink;