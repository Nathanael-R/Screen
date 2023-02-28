import { doc, onSnapshot,deleteField, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { toast } from "react-toastify";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";

const Favorites = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();
  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.favorites);
    });
  }, [user?.email]);
  const trim = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  
  const display = (
    <div className="flex flex-wrap gap-4 justify-center">
      <div className="flex justify-center items-center mb-10 w-full h-[15vh]">
        <h2 className="text-3xl md:text-4xl font-bold">Your Favorites</h2>
      </div>
      {movies?.map((item, id) => (
            <div className="relative mr-3 cursor-pointer inline-block sm:w-[250px] w-[150px]">
            <img
              className="w-full sm:h-[350px] object-cover"
              src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
              alt={item?.id}
            />
            <div className="absolute bottom-0 w-full h-[60px] bg-black/50 sm:px-4 px-1 flex items-center justify-center">
              <div className="">
                <p className="text-xl font-bold !opacity-100 text-white">
                  {trim(item?.title, 15)}
                </p>
              </div>
            </div>
          </div>
          ))}
    </div>
  );
  const message = (
    <div className="text-center text-4xl text-gray-400">
      <p>You need to login to see your favorite shows</p>
    </div>
  );
  return (
    <section className="md:px-16 sm:px-8 py-12 text-white px-4">
      {user?.email ? (display) : (message)}
    </section>
  );
};

export default Favorites;
