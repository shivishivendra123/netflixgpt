import React, { useRef } from 'react'
import openai from './utils/openApi';
import { options } from './utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addMoviesToGptArr } from './utils/slices/GptSlice';
import MovieCard from './MovieCard';
import $ from 'jquery';

const GptSearchRes = () => {
    
    const dispatch = useDispatch();
    const searchTerm = useRef();
    const movieData = useSelector((store)=>store.gpt.gptres);
    // const easyTorrents = require('easytorrents');

    // async function getMovie() {
    //     const movieData = await easyTorrents.search("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NzBiNDg3NWNmOWIwMGRlYzQ2YjdhODhhOTllM2RjYiIsInN1YiI6IjY1Nzg3Mzc4ZjA0ZDAxMDBlM2QxNjVmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KJwXyXK7F7ac9BnVLI24HBT8cIWLpHLnWysD26vPreY", 'matrix', '1080p');
    //     console.log(movieData);
    // }
    
    // getMovie();

// Search '1080' in 'Movies' category and limit to 20 results
    //const torrents = await TorrentSearchApi.search('1080', 'Movies', 20);
    const handleSearch = ()=>{
        // $.blockUI();
        main();
    }

    const get = async(movie)=>{
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', options);
        const json = await data.json();
        return json;
    }

    const fetchMovieDataByName = async(movieArr)=>{
        const movieArrres = movieArr.split(",")
        if(movieArrres.length === 0) return;
        
        const res  =  movieArrres.map((movie)=>{
            return get(movie);
        })

        const result = await Promise.all(res);
        return result;

    }
    async function main() {
        console.log(searchTerm);
        let query = "Act as a Movie Recommendation system and suggest some movie for the query: "+ searchTerm.current.value+".Only give top thirty names in the form of comma separated result given ahead.Example Result: A,B,C,D"
        const chatCompletion = await openai.chat.completions.create({
          messages: [{ role: 'user', content: query }],
          model: 'gpt-3.5-turbo',
        });
        const res = await fetchMovieDataByName(chatCompletion?.choices[0]?.message?.content);
        dispatch(addMoviesToGptArr(res));
        console.log(res);
      }
      
      
  return (
    <div className='absolute z-0 mx-auto left-0 right-0 '>
            <div>
        <form onSubmit={(e)=>{e.preventDefault()}} className='mt-[200px] ml-0 md:ml-[400px] w-screen md:w-1/2 bg-black grid grid-cols-12 p-2 text-white'>
            <input ref={searchTerm} placeholder='Search here' type='text' className='p-2 col-span-8 text-black'></input>
            <button className='ml-3 bg-red-700 p-2 rounded-md col-span-4' onClick={()=>handleSearch()}>Search</button>
        </form>
    </div>
    <div className= "">

        {movieData&&<div className=''>
            {
                movieData.map((movie)=>{
                    return <div className='text-white md:ml-[400px] w-screen md:w-1/2 bg-black bg-opacity-60 mt-4 ' >
                        <h1>{movie.results[0].title}</h1>
                           <div className='flex overflow-x-auto md:flex md:overflow-x-auto'>
                        
                        {
                        
                        movie.results.map((res)=>{
                            return <MovieCard movieData={res}/>
                        })
                        }
                    </div> 
                        </div>
                
                })
            }
    </div>}
    </div>

    </div>
  )
}

export default GptSearchRes