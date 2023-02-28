import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import endpoints from "../components/Endpoints";
import Loader from "../components/Loader";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Searched = () => {
  const trim = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  
  const [searchedMovie, setSearchedMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let params = useParams();

  
  const getSearchedMovie = async (name) => {
    setIsLoading(true);
    const data = await fetch(endpoints.searchRequest + `${name}`);
    const movies = await data.json();
    setSearchedMovie(movies.results);
    setIsLoading(false);
  };

  useEffect(() => {
    getSearchedMovie(params.search);
  }, [params.search]);

  const display = (
    <section className="text-white md:px-16 sm:px-8 px-4 py-12">
      <div className="flex justify-center items-center mb-10 w-full h-[15vh]">
        <h2 className="text-3xl md:text-4xl font-bold">Search Results</h2>
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        {searchedMovie.map((item) => {
          return (
            <div className="" key={item?.id}>
              <div className="relative mr-3 cursor-pointer inline-block sm:w-[250px] w-[150px]">
                <img
                  className="w-full sm:h-[350px] object-cover"
                  src={item.image}
                  alt={item?.title}
                />
                <div className="absolute bottom-0 w-full h-[60px] bg-black/50 sm:px-4 px-1 flex items-center justify-between">
                  <div className="">
                    <p className="text-sm font-bold !opacity-100 text-white">
                      {trim(item?.title, 15)}
                    </p>
                    <p className="text-sm font-bold flex items-center h-full !opacity-70 text-white">
                      {item?.year}
                    </p>
                  </div>
                  <FaRegHeart size={20} />
                </div>
              </div>
            </div>
          );
        })}
        
      </div>
    </section>
  );
  return <>{isLoading ? <Loader /> : display}</>;
};

export default Searched;
