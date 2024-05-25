import React, { useState, useEffect } from "react";
function MovieCard(props) {
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  const [movie, setMovie] = useState([]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };
  const handleCloseButtonClick = () => {
    setSelectedMovie(null);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("/movies-250.json");
        const data = await response.json();
        const shuffledMovies = shuffleArray(data.movies);
        console.log(data.movies);
        setMovie(shuffledMovies);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);
  const closebutton = {
    position: "absolute",
    top: "10px",
    right: "10px",
    border: "none",
    fontSize: "36px",
    padding: "8px 12px",
    borderRadius: "4px",
    color: "red",
    cursor: "pointer",
  };

  return (
    <div className="main">
      <h2>{props.title}</h2>
      <div className="moviecard">
        {movie.map((obj) => (
          <div className="sub-card">
            <img
              className="poster"
              src={obj.Poster}
              alt="poster"
              onClick={() => handleMovieClick(obj)}
            />
          </div>
        ))}
      </div>
      {selectedMovie && (
        <div className="movie-details-container">
          <i
            class="fa fa-window-close"
            onClick={handleCloseButtonClick}
            style={closebutton}
          ></i>

          <div className="movie-details">
            <div className="movie-img-button">
              <img
                className="imagePoster"
                alt="noImage"
                src={selectedMovie.Poster}
              />
              <div className="butns">
                <button>Play Trailer</button>
                <button>Download</button>
              </div>
            </div>

            <div className="movie-sub-details">
              <h3>{selectedMovie.Title}</h3>
              <p>
                <strong style={{ color: "Red" }}>Year: </strong>{" "}
                {selectedMovie.Year}
              </p>
              <p>
                <strong style={{ color: "Red" }}>Released: </strong>{" "}
                {selectedMovie.Released}
              </p>
              <p>
                <strong style={{ color: "Red" }}>Genre: </strong>{" "}
                {selectedMovie.Genre}
              </p>
              <p>
                <strong style={{ color: "Red" }}>Director: </strong>{" "}
                {selectedMovie.Director}
              </p>
              <p>
                <strong style={{ color: "Red" }}>Writer: </strong>{" "}
                {selectedMovie.Writer}
              </p>
              <p>
                <strong style={{ color: "Red" }}>Actors: </strong>{" "}
                {selectedMovie.Actors}
              </p>
              <p>
                <strong style={{ color: "Red" }}>Plot: </strong>{" "}
                {selectedMovie.Plot}
              </p>
              <p>
                <strong style={{ color: "Red" }}>Awards: </strong>{" "}
                {selectedMovie.Awards}
              </p>
              <p>
                <strong style={{ color: "Red" }}>Language: </strong>{" "}
                {selectedMovie.Language}
              </p>
              <p>
                <strong style={{ color: "Red" }}>Country: </strong>{" "}
                {selectedMovie.Country}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieCard;
