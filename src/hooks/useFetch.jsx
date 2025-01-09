import { useEffect, useState } from "react";

export const useFetch = (apiPath, queryTerm = "") => {
  const [data, setData] = useState([]);
  const url = `https://api.themoviedb.org/3/${apiPath}?query=${queryTerm}&language=pt-BR`;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
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
        setData(jsonData.results || []);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    };

    fetchMovies();
  }, [url]);

  return { data };
};
