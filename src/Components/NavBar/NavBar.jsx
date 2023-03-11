import CartWidget from "../CartWidget/CartWidget";
import Styles from "./Navbar.module.css";

const NavBar = () => {
  return (
    <div className={Styles.containerNavbar}>
      <div className={Styles.navbarIcon}>
        <img style={{width:"5vw", height: "8vh", marginLeft:"0.5rem"}} src="https://res.cloudinary.com/duqtm5tnb/image/upload/v1678509553/descargar_njk8mk.png" alt="Logo" />
        <h4 style={{marginLeft:"1rem"}}>GhostVandal <br /> Tu tienda de confianza.</h4>
      </div>
        <ul className={Styles.containerList}>
            <li>Home</li>
            <li>Mouses</li>
            <li>Teclados</li>
            <li>Audifonos</li>
        </ul>
        <CartWidget />
    </div>
  )
}

export default NavBar