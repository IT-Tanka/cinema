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
export const getPopular=async(type, page=1)=>{
    return await getData(`${BASE_URL}${type}/popular?api_key=${API_KEY}${LANGUAGE}&page=${page}`);
};
export const getTop=async(type, page=1)=>{
    return await getData(`${BASE_URL}${type}/top_rated?api_key=${API_KEY}${LANGUAGE}&page=${page}`);
};

// https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
// https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1

