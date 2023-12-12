import Header from "./Header"
import useNowPlayingMovie from "./Hooks/useNowPlayingMovie"

const Browse = ()=>{
    useNowPlayingMovie();
    return (
        <div className="w-full">
            <Header/>
        </div>
    )
}

export default Browse