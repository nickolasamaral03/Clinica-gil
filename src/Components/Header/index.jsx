import { Link } from "react-router-dom";

const Header = () => {
 return(
        <Link to={"/"}><p className="m-14 lg:text-4xl sm:text-2xl sm:text-center md:text-center lg:text-left italic font-semibold ">Clínica de Consultas Ágil</p></Link>
 )
}

export default Header;