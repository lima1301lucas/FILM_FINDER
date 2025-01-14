import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import backup from "../assets/backup.jpg";
import { convertMinutes, formatDate, formatCurrency } from "../utils/utils";

export const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState([]); 
    const image = movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : backup;

    useEffect(() => {
      const fetchMovieDetails = async () => {
        try {
          const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
          const options = {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
            },
          };

          const response = await fetch(url, options);

          if (!response.ok) {
            throw new Error(`Erro: ${response.status} - ${response.statusText}`);
          }

          const jsonData = await response.json();
          setMovie(jsonData);
        } catch (error) {
          console.error("Erro ao buscar dados da API:", error);
        }
      };

      fetchMovieDetails();
    }, [id]); 
  
    useEffect(() => {
        document.title = `${movie.title}`;
    });

    return (
        <main className="container">
            <h5 className="text-danger py-2 border-bottom mb-3">{movie.title}</h5>
            <div className="row">
                <div className="col-md-4">
                    <img src={image} className="img-fluid img-thumbnail"/>
                </div>
                <div className="col-md-8">
                    <h3 className="text-primary">{movie.title}</h3>
                    <p className="mt-3">{movie.overview}</p>
                    {movie.genres ? <p className="d-flex gap-3">
                        {movie.genres.map((genre) => (
                            <span key={genre.id} className="badge bg-danger">{genre.name}</span>
                        ))}
                    </p> : ""}
                    <p className="mt-2">
                        <i className="bi bi-star-fill text-warning"></i>&nbsp;{movie.vote_average}&nbsp;|&nbsp;
                        <i className="bi bi-people-fill text-success"></i>{movie.vote_count} reviews
                    </p>
                    <table className="table table-bordered w-50 mt-2">
                        <tbody>
                            <tr>
                                <th>Runtime</th>
                                <td>{convertMinutes(movie.runtime)}</td>
                            </tr>
                            <tr>
                                <th>Budget</th>
                                <td>{formatCurrency(movie.budget)}</td>
                            </tr>
                            <tr>
                                <th>Revenue</th>
                                <td>{formatCurrency(movie.revenue)}</td>
                            </tr>
                            <tr>
                                <th>Release date</th>
                                <td>{formatDate(movie.release_date)}</td>
                            </tr>
                        </tbody>
                    </table>
                    <a className="btn btn-warning" target="_blank" href={`https://www.imdb.com/title/${movie.imdb_id}/`}>View in IMDB</a>
                </div>
            </div>
        </main>
  );
};
