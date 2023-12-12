import { useEffect, useState } from "react";
import { options } from "./utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerData } from "./utils/slices/movieSlice";

const VideoTrailer = ({movie_id})=>{
    console.log(movie_id);
    const dispatch = useDispatch();
    const data = useSelector((store)=>store.movie.VideoTrailer);
    const fetchTrailerData = async()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movie_id+"/videos?language=en-US",options);
        const json = await data.json();
        
        const filterData = json.results.filter((video)=>video.type==="Trailer");
        const trailer = filterData[0];
        dispatch(addTrailerData(trailer));
    }

    console.log(data)

    useEffect(()=>{
        fetchTrailerData();
    },[]);
    return(
        <div>
            <iframe className="w-screen aspect-video" src={"https://www.youtube.com/embed/"+data?.key+"?autoplay=1&mute=1"} title="Youtube Video Player">
                
            </iframe>
        </div>
    )
}

export default VideoTrailer;