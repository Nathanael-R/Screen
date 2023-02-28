import { FaCopyright, FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa"
import { Link } from "react-router-dom"

const Footer = () => {
    const thisYear = new Date()
  return (
    <footer className="md:p-16 sm:p-8 p-4 flex flex-col gap-8 sm:flex">
        <hr />
        <div className="flex md:flex-row flex-col justify-between items-center md:gap-0 gap-6">
            <h1 className="text-yellow-500 font-extrabold text-4xl cursor-pointer">SCREENGLUE</h1>
            <ul className="text-white font-semibold md:text-xl flex flex-wrap justify-center gap-6">
               <Link to="/">
               <li>Home</li>
               </Link>
               <Link to="movies">
               <li>Movies</li>
               </Link>
               <li>Terms</li>
               <li>Contact Us</li>
            </ul>
            <div className="text-white flex gap-6">
                <FaTwitter size={25}/>
                <FaFacebook size={25}/>
                <FaInstagramSquare size={25}/>
            </div>
        </div>
        <hr />
        <p className="text-white/40 flex items-center m-auto"><FaCopyright className="mr-2"/> Copyright - Nathanael {thisYear.getFullYear()}</p>
    </footer>
  )
}

export default Footer