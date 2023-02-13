import { useEffect, useState } from "react";
import { FaRegBell, FaRegBookmark } from "react-icons/fa";
import endpoints from "./Endpoints";

const Upcoming = () => {
  const [upComing, setUpComing] = useState([]);
  const banner = upComing[Math.floor(Math.random() * upComing.length)];
  useEffect(() => {
    getUpComing();
  }, []);

  const trim = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  const getUpComing = async () => {
    const check = localStorage.getItem("upComing");

    if (check) {
      setUpComing(JSON.parse(check));
    } else {
      const api = await fetch(endpoints.comingRequest);
      const data = await api.json();
      localStorage.setItem("upComing", JSON.stringify(data.items));
      setUpComing(data.items);
      console.log(upComing);
    }
  };

  return (
    <section className="text-white sm:px-8 md:px-16 py-12 px-4">
      <div className="flex items-center mb-6  w-fit">
        <div className="w-2 h-10 bg-yellow-400 mr-3"></div>
        <h2 className="text-3xl font-bold">Coming Soon</h2>
      </div>
      <h4 className="text-xl font-bold underline cursor-pointer mb-8 w-fit">
        View all
      </h4>
      <div className=" md:h-[600px] w-full flex flex-col md:flex-row md:justify-between gap-4">
        <div className="w-full md:w-[50%] md:h-full h-[400px]">
          <div className="relative h-full w-full cursor-pointer">
            <img
              className="h-full w-full object-cover"
              src={banner?.image}
              alt={banner?.title}
            />
            <div className="absolute bottom-0 w-full h-[80px] bg-black/50 flex flex-col justify-center p-4">
              <p className="text-xl font-bold mb-1">{banner?.title}</p>
              <p className="text-xs font-bold opacity-70">
                Genre: {banner?.genres}
              </p>
            </div>
            <FaRegBookmark className="absolute top-0 right-4 hover:bg-amber-400 border-none" size={35}/>
          </div>
        </div>
        <aside className="whitespace-wrap md:justify-evenly md:overflow-x-hidden flex md:flex-wrap overflow-x-scroll md:overflow-y-scroll md:w-[50%] gap-4 sm:scrollbar-default scrollbar-hide">
          {upComing.map((movie) => {
            return (
              <div className="md:w-[350px]" key={movie?.id}>
                <div className="md:h-[180px] gap-2 md:flex md:w-full w-[200px] cursor-pointer">
                  <div className=" md:h-full">
                    <img
                      src={movie?.image}
                      alt={movie?.title}
                      className="object-cover h-[180px] w-full md:h-full"
                    />
                  </div>
                  <div className="text-amber-400">
                    <h4 className="text-xl font-bold mb-2">{trim(movie?.title, 15)}</h4>
                    <p className="mb-1 text-sm">{movie?.genres}</p>
                    <p>{movie?.year}</p>
                    <button className="flex gap-1 mt-4 text-sm bg-amber-400 p-2 font-bold text-white rounded-full md:hover:bg-white md:hover:text-black">Set a Reminder<FaRegBell size={20} /></button>
                  </div>
                </div>
              </div>
            );
          })}
        </aside>
      </div>
    </section>
  );
};

export default Upcoming;
