import { useEffect } from "react";
import { options } from "./utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlaying, addTopRated } from "./utils/slices/movieSlice";
import MovieCard from "./MovieCard";

const NowPlaying = () => {

    const dispatch = useDispatch();
    const data = useSelector((store)=>store.movie.NowPlaying);
    console.log(data);
    const fetchTopRated = async()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",options);
        const json = await data.json();
        dispatch(addNowPlaying(json));
    }


    useEffect(()=>{
        fetchTopRated()
    },[])

    if(data.length===0) return;
  return (
    <div className="text-white font-bold text-5xl m-4">
            <h1 className="my-4"> Now Playing</h1>
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

export default NowPlaying