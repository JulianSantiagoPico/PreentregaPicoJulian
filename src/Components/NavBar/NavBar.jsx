import CartWidget from "../CartWidget/CartWidget";
import Styles from "./Navbar.module.css";

const NavBar = () => {
  return (
    <div className={Styles.containerNavbar}>
      <div className={Styles.navbarIcon}>
        <a href="#"><img style={{width:"5vw", height: "8vh", marginLeft:"0.5rem"}} src="https://res.cloudinary.com/duqtm5tnb/image/upload/v1677376252/download_fmvzqa.png" alt="Logo" /></a>
        <h4 style={{marginLeft:"1rem"}}>GhostVandal <br /> Tu tienda de confianza.</h4>
      </div>
        <ul className={Styles.containerList}>
            <a href="#" className={Styles.Link}><li>Home</li></a>
            <a href="#" className={Styles.Link}><li>Tienda</li></a>
            <a href="#" className={Styles.Link} ><li>¿Quienes somos?</li></a>
        </ul>
        <CartWidget />
    </div>
  )
}

export default NavBar