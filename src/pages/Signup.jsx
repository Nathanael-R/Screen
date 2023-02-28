import { useState } from "react";
import { FaEye, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Signup = () => {
  // const [form, setForm] = useState({
  //     email: "",
  //     password: "",
  //     confirmPassword: ""
  //   });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisble, setVisible] = useState(false);
  const { user, signUp } = UserAuth();
  const navigate = useNavigate();

  //   function handleChange(event) {
  //     const { name, value } = event.target;
  //     setForm((prevForm) => ({
  //       ...prevForm,
  //       [name]: value,
  //     }));
  //   }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  function togglePassword() {
    setVisible(!isVisble);
  }

  return (
    <section className="w-full px-4 py-12 sm:px-8 md:px-16 md:flex md:flex-col md:items-center">
      <form
        action=""
        className="md:flex md:flex-col md:items-center"
        onSubmit={handleSubmit}
      >
        <div className="text-white mb-6">
          <h3 className="text-3xl md:text-4xl font-bold">Sign Up</h3>
        </div>
        <div className="flex flex-col gap-4 ">
          <input
            type="email"
            className="rounded-full h-12 px-4 outline-none md:w-[400px]"
            placeholder="Email"
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            required
          />
          <div className="relative flex items-center h-fit">
            <FaEye
              className="absolute top-4 right-4 cursor-pointer"
              onClick={togglePassword}
            />
            <input
              type={!isVisble ? "password" : "text"}
              className="rounded-full h-12 px-4 outline-none w-full"
              placeholder="Password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              required
            />
          </div>
          <div className="relative flex items-center h-fit mb-6">
            <FaEye
              className="absolute top-4 right-4 cursor-pointer"
              onClick={togglePassword}
            />
            <input
              type={!isVisble ? "password" : "text"}
              className="rounded-full h-12 px-4 outline-none w-full"
              placeholder="Confirm Password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              name="confirmPassword"
              required
            />
          </div>

          <button className="mb-6 bg-amber-400 text-white h-12 rounded-full font-semibold text-xl">
            Sign Up
          </button>
          <div className="flex text-white items-center justify-center gap-2">
            <hr className="w-16" />
            <p>More Sign Up options</p>
            <hr className="w-16" />
          </div>
        </div>
      </form>
      <div className="w-full flex flex-col items-center justify-center my-6 md:w-[400px]">
        <button className="w-full bg-transparent text-white flex items-center justify-center gap-2 border-2 py-3 rounded-full mb-4">
          Sign Up with Google
          <FaGoogle />
        </button>
        <div className="text-white w-full flex items-center justify-center gap-2">
          <p className="text-sm">Already have an account?</p>
          <Link to="/login">Sign In instead</Link>
        </div>
      </div>
    </section>
  );
};

export default Signup;
