import { useEffect, useState } from "react"
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { populateMovie } from "../utils/slices/movieSlice";
const useNowPlayingMovie = ()=>{
    const dispatch = useDispatch();
    //const [movieData,setMovieData] = useState(null);

    const fetchMovieList = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',
            options
        )

        const json = await data.json();
        dispatch(populateMovie(json.results));
        //setMovieData(json);
        
    }

    useEffect(()=>{
        fetchMovieList();
    },[])

}

export default useNowPlayingMovie;