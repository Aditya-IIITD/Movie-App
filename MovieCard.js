import React from "react";

function MovieCard(props) {
  const { title, plot, price, rating, stars, fav, inCart, imgsrc } =
    props.movies;
  const { movies, addstars, decstars, handleclick, handleCart } = props;
  return (
    <>
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img alt="avengers" src={imgsrc} />
          </div>
          <div className="right">
            <div className="title">{title}</div>
            <div className="plot">{plot}</div>
            <div className="price">Rs. {price}</div>
            <div className="footer">
              <div className="rating">{rating} Rating</div>
              <div className="star-dis">
                <img
                  alt="decrease"
                  className="str-btn"
                  src="https://cdn-icons-png.flaticon.com/128/43/43625.png"
                  onClick={() => decstars(movies)}
                />
                <img
                  className="stars"
                  alt="star"
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                />
                <img
                  alt="increase"
                  className="str-btn"
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828925.png"
                  onClick={() => addstars(movies)}
                />
                <span>{stars}</span>
              </div>
              <button
                className={fav ? "favourite-btn" : "unfavourite-btn"}
                onClick={() => handleclick(movies)}
              >
                {fav ? "Favourite" : "Unfavourite"}
              </button>

              <button
                className={inCart ? "Remove-cart" : "cart-btn"}
                type="button"
                onClick={() => handleCart(movies)}
              >
                {inCart ? "Remove" : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
