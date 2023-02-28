import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import endpoints from "../components/Endpoints";
import Loader from "../components/Loader";

const Movies = () => {
  const [popular, setPopular] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    getPopular();
  }, []);
  
  const getPopular = async () => {
      setIsLoading(true);
      const api = await fetch(endpoints.popularRequest);
      const data = await api.json();
      setPopular(data.results);
      setIsLoading(false);
    }

  const display = (
    <div className="flex flex-wrap gap-4 justify-center">
      {popular?.map((item, id) => (
        <Movie key={id} item={item} />
      ))}
    </div>
  );
  return (
    <section className="md:px-16 sm:px-8 py-12 text-white px-4">
      <div className="flex justify-center items-center mb-10 w-full h-[15vh]">
        <h2 className="text-3xl md:text-4xl font-bold">All Movies</h2>
      </div>
      {isLoading ? <Loader /> : display}
    </section>
  );
};

export default Movies;
