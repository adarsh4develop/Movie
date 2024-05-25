// const api_key = <YOUR_API_KEY>;
// const movie_title = 'The Shawshank Redemption';

// fetch(`https://www.omdbapi.com/?apikey=${api_key}&t=${movie_title}`)
//      .then(response => response.json())
//      .then(data => {
//          const title = data.Title;
//          const plot = data.Plot;
//          console.log(title, plot);
//          })
//      .catch(error => console.error(error));

// import React, { useEffect, useState } from "react";

// function App() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=3c68dac6&t=titanic`)
      .then((response) => response.json())
      .then((movie) => {
        console.log(movie);
        setMovie(movie);
      });
  }, []);

//   return (
//     <div className="App">
//       <h1>hello world</h1>
    //   {<h1>{movie.Title}</h1>}
    //   {<h1>{movie.Actors}</h1>}
//       {<h1>{movie.Awards}</h1>}
//     </div>
//   );
// }
