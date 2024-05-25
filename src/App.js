import React from "react";
import Navbar from "./Navbar";
import Firstpart from "./Firstpart";
import "./app.css";
import MovieCard from "./MovieCard";
import Footer from "./Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Firstpart />
      <MovieCard title="Oscar Win Movies" />
      <MovieCard title="Trending one" />
      <MovieCard title="Old Oscar Movies" />
      <Footer />
    </div>
  );
}

export default App;
