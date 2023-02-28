import { useEffect, useState } from "react";
import { FaPlayCircle } from "react-icons/fa";
import endpoints from "./Endpoints";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];
  useEffect(() => {
    getPopular();
  }, []);
  const trim = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  const getPopular = async () => {
      const api = await fetch(endpoints.popularRequest);
      const data = await api.json();
      setMovies(data.results);
    };

  return (
    <main className="sm:h-[550px] text-white h-[450px]">
      <div className="w-full h-full">
        <div className="absolute w-full h-[450px] sm:h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
      </div>
      <div className="absolute w-full top-[17%] p-4 md:px-16 sm:px-8">
        <h1 className="lg:text-5xl text-4xl font-bold mb-8">{movie?.title}</h1>
        <p className="md:w-[35%]">{trim(movie?.overview, 150)}</p>
        <p className="text-gray-500 my-4">
          Release Year: {movie?.release_date}
        </p>
        <div className="flex">
          <button className="bg-yellow-500 font-bold h-14 sm:w-[180px] rounded-full mr-4 flex items-center justify-center gap-2 sm:p-0 p-4">
            Watch Now <FaPlayCircle className="bg-transparent" size={20} />
          </button>
          <button
            className="bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100
 font-bold h-14 sm:w-[180px] rounded-full sm:p-0 p-4"
          >
            Watch Later
          </button>
        </div>
      </div>
    </main>
  );
};

export default Main;
