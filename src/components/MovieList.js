const MovieList=({movies,name,loggerFunction})=>{
    const movieLists = movies.map((movie)=>{
        return <li key={movie.id} onClick={loggerFunction}>{movie.name}</li>
    });
    return(
        <div>
            <h1>Movies</h1>
            <h1>{name}</h1>
            <ul>{movieLists}</ul>
        </div>
    )
}
export default MovieList