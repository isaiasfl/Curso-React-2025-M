import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const api_token = import.meta.env.VITE_API_TOKEN;
  const fechingDataMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${api_token}`
    );
    if (!response.ok) {
      throw new Error("Error en la petición");
    }
    const data = await response.json();
    setMovies(data.results);
  };

  useEffect(() => {
    fechingDataMovies();
  }, []);

  return (
    <div className="space-y-8">
      {/* Cabecera  */}
      <header className="text-center">
        <h1 className="text-4xl font-bold text-sky-950">
          Bienvenido a Movie App
        </h1>
        <p className="mt-2 text-gray-600">
          La mejor aplicación para buscar películas y leer reseñas de cine
        </p>
      </header>
      {/* sección películas populares */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Películas populares</h2>
          <Link to="/movies" className="text-sky-900 hover:underline">
            Ver todas{" "}
          </Link>
        </div>
      </section>
      {/* grid con las películas populares */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {/* Películas */}
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
