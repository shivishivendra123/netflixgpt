const MovieCard = ({movieData})=>{
    console.log(movieData)
    const {original_title,overview,poster_path,title,vote_average} = movieData;
    if(!poster_path) return null
    return(
        <div className="min-w-[100px] max-w-[100px] md:min-w-[200px] m-2 border-cyan-400">
            <img className=""src={"https://image.tmdb.org/t/p/w500"+poster_path}></img>
            {/* <p className="text-3xl"> {vote_average}</p> */}
        </div>
    )
}

export default MovieCard