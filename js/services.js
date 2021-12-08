const API_KEY='6736885e9d93d1a715bc534182ce9ddd';
const BASE_URL='https://api.themoviedb.org/3/';
const LANGUAGE='&language=ru-RU';

const getData=(url)=>fetch(url)
    .then (response=>{
        if(response.ok){
            return response.json();
        }
        throw `что-то пошло не такб ошибка ${response.status}`;
    })
    .catch(err=>console.error(err));
    

export const getTriends=async(type='all',period='day',page=1)=>{
    return await getData(`${BASE_URL}trending/${type}/${period}?api_key=${API_KEY}${LANGUAGE}&page=${page}`);
};