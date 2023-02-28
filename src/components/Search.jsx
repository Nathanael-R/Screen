import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="relative flex items-center">
        <FaSearch onClick={submitHandler} className="absolute right-2 cursor-pointer" size={20}/>
        <input type="text" 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search..."
        className="h-9 rounded-full p-3 bg-slate-100 md:text-xl text-sm outline-none border-transparent"
        />
      </div>
    </form>
  );
};

export default Search;
