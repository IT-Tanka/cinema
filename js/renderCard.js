import {getVideo} from './services.js';

const listCard=document.querySelector('.other-films__list');

const renderCard=(data, type)=>{

    listCard.textContent='';
    Promise.all(data.map(async(item)=>{
        
            const mediaType=item.media_type ?? type;
            const video=await getVideo(item.id, mediaType);
            const key=video.results[0]?.key;    
            const card=document.createElement('li');
            card.className='other-films__item';
            const link=document.createElement('a');
            
            if (key) link.href=`https://youtu.be/${key}`;
            link.className='other-films__link';
            if(item.vote_average) { link.dataset.rating=item.vote_average;}
            const img=document.createElement('img');
            
            img.className='other-films__img';
            img.alt=`постер ${item.title|| item.name}`;
            if( !item.poster_path) {
                img.src='img/no_poster.jpg';
                const filmTitle=document.createElement('h2');
                filmTitle.style.color= 'rgb(0, 35, 66)';
                filmTitle.textContent=`${item.title|| item.name}`.toUpperCase();
                link.style.position='relative';
                filmTitle.style.position='absolute';
                filmTitle.style.top='5%';
                filmTitle.style.left='5%';
                link.append(filmTitle);
            }else{
                img.src=`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${item.poster_path}`;
                }
            link.append(img);    
            card.append(link);

            return card;

    })).then(cards=>listCard.append(...cards));

};
export default renderCard;
