const MovieCard = ({movieData})=>{
    const {original_title,overview,poster_path,title} = movieData;
    return(
        <div className="">
            <img className=""src={"https://image.tmdb.org/t/p/w500"+poster_path}></img>
        </div>
    )
}

export default MovieCard