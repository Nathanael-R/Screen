import { useEffect, useState } from "react";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";
import endpoints from "./Endpoints";

const Latest = () => {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
      const api = await fetch(endpoints.popularRequest);
      const data = await api.json();
      setPopular(data.results);
    }
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  
  return (
    <section className="md:px-16 sm:px-8 py-8 text-white px-4">
      <div className="flex items-center mb-6 w-fit">
        <div className="w-2 h-10 bg-yellow-400 mr-3"></div>
        <h2 className="text-3xl font-bold">Latest Movies</h2>
      </div>
      <Link to='/movies'>
      <h4 className="text-xl font-bold underline cursor-pointer w-fit mb-6">
        View all
      </h4>
      </Link>
      <div className="relative flex items-center group">
        {
          <MdChevronLeft
            onClick={slideLeft}
            className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
            size={40}
          />
        }
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {popular?.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        {
          <MdChevronRight
            onClick={slideRight}
            className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
            size={40}
          />
        }
      </div>
    </section>
  );
};

export default Latest;
