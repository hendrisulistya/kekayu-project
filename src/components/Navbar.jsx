import { Link } from "react-router-dom";
import logo from "../assets/kekayu.png"

function Navbar() {
    return (
    // <nav className="bg-blue-500">
    //   <div className="md:flex items-center justify-between">
    //   <div className="logo text-white font-bold p-2">KEKAYU PROJECT</div>
    //   <ul className="md:flex md:items-center">
    //   {[
    //     ['Home', '/'],
    //     ['About', '/about'],
    //     ['Gallery', '/gallery'],
    //     ['Our Team', '/teams'],
    //   ].map(([title, endPoint]) => (
    //     <li>
    //     <Link to={endPoint} className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">{title}</Link>
    //     </li>
    //   ))}
    //   </ul>
    //   </div>
    // </nav>
    <div>
    <nav className="bg-white border-blue-500">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
        <a href="/" className="flex items-center">
            <img src={logo} className="h-6 mr-3 sm:h-9" alt="Logo" />
        </a>

    </div>
    </nav>
    <nav className="bg-blue-500 text-white">
    <div className="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
        <div className="flex items-center">
            <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
            {[
    ['Home', '/'],
         ['Gallery', '/gallery'],
         ['Team', '/teams'],
         ['Contact us', '/contact'],
       ].map(([title, endPoint]) => (
         <li>
         <Link to={endPoint} className="dark:text-white hover:underline">{title}</Link>
         </li>
       ))}
                
            </ul>
        </div>
    </div>
</nav>
</div>
    );
}

export default Navbar;