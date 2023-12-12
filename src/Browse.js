import { useSelector } from "react-redux";
import Header from "./Header"
import useNowPlayingMovie from "./Hooks/useNowPlayingMovie"
import VideoTitle from "./VideoTitle";
import VideoTrailer from "./VideoTrailer";

const Browse = ()=>{
    useNowPlayingMovie();
    
    const data = useSelector((store)=>store.movie.movieList)
    if(!data) return;
    console.log(data);

    return (
        <div className="w-full">
            <Header/>
            <VideoTitle title={data[0].original_title} description={data[0].overview}/>
            <VideoTrailer movie_id = {data[0].id}/>
        </div>
    )
}

export default Browse