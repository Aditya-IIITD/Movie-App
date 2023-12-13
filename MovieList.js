import MovieCard from "./MovieCard";

function MovieList(props) {
  const { movies, addstars, decStars, handleFavourite, handleCart } = props;
  return (
    <>
      {movies.map((movie) => (
        <MovieCard
          movies={movie}
          addstars={addstars}
          decstars={decStars}
          handleclick={handleFavourite}
          handleCart={handleCart}
          key={movie.id}
        />
      ))}
    </>
  );
}

export default MovieList;
