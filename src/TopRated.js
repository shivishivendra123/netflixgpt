import { useEffect } from "react";
import { options } from "./utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRated } from "./utils/slices/movieSlice";
import MovieCard from "./MovieCard";

const TopRated = ()=>{

    const dispatch = useDispatch();
    const data = useSelector((store)=>store.movie.TopRated);
    console.log(data);
    const fetchTopRated = async()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/top_rated",options);
        const json = await data.json();
        dispatch(addTopRated(json));
    }


    useEffect(()=>{
        fetchTopRated()
    },[])

    if(data.length===0) return;
    

    return(
        <div className="text-white font-bold text-5xl mt-[-300px]">
            <h1> Top Rated</h1>
            <div className="flex">
                <div className="text-white flex">
                {
                    data.results.map((movie)=>{
                        return (
                            <MovieCard movieData={movie}/>
                        )
                    })
                }
                </div>
        </div>
        </div>
        
        
    )
}

export default TopRated;
