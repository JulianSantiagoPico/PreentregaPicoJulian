import {BsFillCartFill} from "react-icons/bs"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../Context/CartContext";
import "./CartWidget.css";

const CartWidget = () => {
   
  const { getTotalQuantity } = useContext( CartContext )

  const total = getTotalQuantity()

  return (
    <Link to="/cart">
      <div className="container-cart">
        <BsFillCartFill
          style={{
            fontSize: "2rem",
            color: "#e1d4c7",
          }}
        />
        <div className="bubble-counter">
          <span>{total}</span>
        </div>
      </div>
    </Link>
  )
}

export default CartWidget