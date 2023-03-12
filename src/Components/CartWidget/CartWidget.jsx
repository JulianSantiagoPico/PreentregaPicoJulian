import {BsFillCartFill} from "react-icons/bs"

import { Link } from "react-router-dom"

const CartWidget = () => {
  return (
    <Link to="/cart" style={{color:"black"}}>
      <BsFillCartFill style={{margin:"1rem"}} size={23}/>
    </Link>
  )
}

export default CartWidget