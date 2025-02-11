import { useParams } from "react-router-dom";
import { PacmanLoader } from "react-spinners";
import { useFetch } from "../hooks/useFetch";
import { getImageUrl, getMovieDetails } from "../services/tmdb";

const MovieDetail = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    () => getMovieDetails(Number(id)),
    [id]
  );

  if (error) {
    return (
      <div className="text-center p-10">
        <p className="text-red-600">Error al cargar la película</p>
      </div>
    );
  }
  if (loading) <PacmanLoader color="#3a6bca" />;

  return (
    <article className="max-w-4xl mx-auto">
      {/* Header con imagen de fondo
       */}
      <header className="relative h-96 mb-8">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={getImageUrl(data?.backdrop_path, "original")}
          alt={data?.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent">
          <div className="absolute bottom-0 text-white p-6">
            <h1 className="text-4xl font-bold">{data?.title}</h1>
            <p className="text-lg">{data?.runtime} min   - {data?.release_date.split("-")[0]}</p>
            <p>{data?.vote_average}⭐</p>
          </div>
        </div>
      </header>
    </article>
  );
};

export default MovieDetail;
