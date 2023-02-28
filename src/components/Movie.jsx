import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Movie = ({ item }) => {
  const trim = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  function notif() {
    return toast.success("Added to Favorites", {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
  const [like, setLike] = useState(false);
  // const [saved, setSaved] = useState(false);
  const { user } = UserAuth();

  const movieID = doc(db, "users", `${user?.email}`);
  const favorite = async () => {
    if (user?.email) {
      setLike(!like);
      // setSaved(true);
      await updateDoc(movieID, {
        favorites: arrayUnion({
          id: item?.id,
          title: item?.title,
          img: item?.backdrop_path,
        }),
      });
    } else alert("Please Log In");
  };

  return (
    <div className="relative mr-3 cursor-pointer inline-block sm:w-[250px] w-[150px]">
      <img
        className="w-full h-[250px] sm:h-[350px] object-cover"
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.id}
      />
      <div className="absolute bottom-0 w-full h-[60px] bg-black/50 sm:px-4 px-1 flex items-center justify-between">
        <div className="">
          <p className="text-sm font-bold !opacity-100 text-white">
            {trim(item?.title, 15)}
          </p>
          <p className="text-sm font-bold flex items-center h-full !opacity-70 text-white">
            {item?.release_date}
          </p>
        </div>
        <p onClick={favorite}>
          {like ? <FaHeart size={20} /> && notif() : <FaRegHeart size={20} />}
        </p>
      </div>
    </div>
  );
};

export default Movie;
