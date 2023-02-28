import { FaEye, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  //   const [form, setForm] = useState({
  //     email: "",
  //     password: "",
  //   });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, logIn } = UserAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [isVisible, setVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
        await logIn(email, password);
        navigate('/')
    } catch (error) {
        setError(error.message)
    }

  }
//   function handleChange(event) {
//     const { name, value } = event.target;
//     setForm((prevForm) => ({
//       ...prevForm,
//       [name]: value,
//     }));
//   }

  function togglePassword() {
    setVisible(!isVisible);
  }

  return (
    <section className="w-full px-4 py-12 sm:px-8 md:px-16 md:flex md:flex-col md:items-center">
      <form
        className="md:flex md:flex-col md:items-center"
        onSubmit={handleSubmit}
      >
        <div className="text-white mb-6">
          <h3 className="text-3xl md:text-4xl font-bold">Sign In</h3>
        </div>
        {error ? <p className="p-1 text-white bg-red-600 mt--2 text-sm w-full flex items-center justify-center h-10 mb-4 font-semibold">Wrong password</p>:null}
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
              type={!isVisible ? "password" : "text"}
              className="rounded-full h-12 px-4 outline-none w-full"
              placeholder="Password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              required
            />
          </div>
          <p className="text-white text-sm text-center">Forgot Password?</p>
          <button className="mb-6 bg-amber-400 text-white h-12 rounded-full font-semibold text-xl">
            Sign In
          </button>
          <div className="flex text-white items-center justify-center gap-2">
            <hr className="w-16" />
            <p>More Sign In options</p>
            <hr className="w-16" />
          </div>
        </div>
      </form>
      <div className="w-full flex flex-col items-center justify-center my-6 md:w-[400px]">
        <button className="w-full bg-transparent text-white flex items-center justify-center gap-2 border-2 py-3 rounded-full mb-4">
          Continue with Google
          <FaGoogle />
        </button>
        <div className="text-white w-full flex items-center justify-center gap-2">
          <p className="text-sm">Dont have an account?</p>
          <Link to="/signup">
            <p className="font-bold">Sign up instead</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
