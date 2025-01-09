import { useSearchParams } from "react-router-dom";
import { Card } from "../components/Card.jsx";
import { useEffect } from "react";
import { useFetch } from "../hooks/useFetch.jsx";

export const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const {data : movies} = useFetch(apiPath, queryTerm)

  useEffect(() => {
    document.title = `Search reasult for ${queryTerm}`
  });

  return (
    <main className="container">
      <h5>{movies.length == 0 ? `No results found for  "${queryTerm}"` : `Results found for  "${queryTerm}"`}</h5>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-2">
        {movies.map((movie) => {
          return <Card  key={movie.id} movie={movie}/>;
        })}
      </div>
    </main>
  )
}