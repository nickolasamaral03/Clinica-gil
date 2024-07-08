import { Link } from "react-router-dom";

const Header = () => {
 return(
        <Link to={"/"}><p className="m-14 lg:text-4xl md:text-3xl sm:text-2xl lg:animate-none md:animate-none sm:animate-pulse sm:text-center md:text-left lg:text-left italic font-semibold ">Clínica de Consultas Ágil</p></Link>
 )
}

export default Header;