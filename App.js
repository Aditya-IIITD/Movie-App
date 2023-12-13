import MovieList from "./MovieList";
import Navbar from "./navbar";
import { Component } from "react";
import { movies } from "./moviesdata";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movies,
      cartCount: 0,
    };
  }

  addStars = (movie) => {
    const { movies } = this.state;
    const id = movies.indexOf(movie);
    if (movies[id].stars >= 5) return;
    movies[id].stars += 0.5;
    this.setState({
      movies: movies,
    });
  };

  decStars = (movie) => {
    const { movies } = this.state;
    const id = movies.indexOf(movie);
    if (movies[id].stars <= 0) return;
    movies[id].stars -= 0.5;
    this.setState({
      movies: movies,
    });
  };

  handleFavourite = (movie) => {
    const { movies } = this.state;
    const id = movies.indexOf(movie);
    movies[id].fav = !movies[id].fav;
    this.setState({
      movies: movies,
    });
  };

  handleCart = (movie) => {
    const { movies } = this.state;
    const id = movies.indexOf(movie);
    movies[id].inCart = !movies[id].inCart;
    let cartCount = this.state.cartCount;
    if (movies[id].inCart) {
      cartCount += 1;
    } else {
      cartCount -= 1;
    }
    this.setState({
      movies: movies,
      cartCount: cartCount,
    });
  };

  render() {
    const { movies, cartCount } = this.state;
    return (
      <>
        <Navbar cartCount={cartCount} />
        <MovieList
          movies={movies}
          addstars={this.addStars}
          decStars={this.decStars}
          handleFavourite={this.handleFavourite}
          handleCart={this.handleCart}
        />
      </>
    );
  }
}

export default App;
