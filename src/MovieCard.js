const MovieCard = ({movieData})=>{
    console.log(movieData)
    const {original_title,overview,poster_path,title} = movieData;
    if(!poster_path) return null
    return(
        <div className="flex w-[200px] m-3">
            <img className="w-[200px]"src={"https://image.tmdb.org/t/p/w500"+poster_path}></img>
        </div>
    )
}

export default MovieCard