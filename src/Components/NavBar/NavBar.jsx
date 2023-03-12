import CartWidget from "../CartWidget/CartWidget";
import Styles from "./Navbar.module.css";

import { Link } from "react-router-dom"
 
const NavBar = () => {
  return (
    <div className={Styles.containerNavbar}>
      <div className={Styles.navbarIcon}>
   
        <Link to="/" style={{textDecoration: "none"}} >
          <img style={{width:"5vw", height: "8vh", marginLeft:"0.5rem"}} src="https://res.cloudinary.com/duqtm5tnb/image/upload/v1678509553/descargar_njk8mk.png" alt="Logo" />
        </Link>
   
        <h4 style={{marginLeft:"1rem"}}>GhostVandal <br /> Tu tienda de confianza.</h4>
      </div>
        <ul className={Styles.containerList}>
            <Link to="/" style={{textDecoration:"none", color:"black"}}>Home</Link>
            <Link to="/category/Mouse" style={{textDecoration:"none", color:"black"}}>Mouses</Link>
            <Link to="/category/Teclado" style={{textDecoration:"none", color:"black"}}>Teclados</Link>
            <Link to="/category/Audifonos" style={{textDecoration:"none", color:"black"}}>Audifonos</Link>
        </ul>
        <CartWidget />
    </div>
  );
};

export default NavBar