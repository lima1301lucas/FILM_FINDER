import { Routes, Route } from "react-router-dom";
import { MovieList } from "../pages";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MovieList title="Your guide to great movies" apiPath="movie/now_playing" />} />
      <Route path="/movies/popular" element={<MovieList title="Popular movies" apiPath="movie/popular" />} />
      <Route path="/movies/top" element={<MovieList title="Top rated movies" apiPath="movie/top_rated" />} />
      <Route path="/movies/upcoming" element={<MovieList title="Upcoming movies" apiPath="movie/upcoming" />} />
    </Routes>
  );
};