import CartWidget from "../CartWidget/CartWidget";
import Styles from "./Navbar.module.css";

import { Link } from "react-router-dom"

import {collection, getDocs} from "firebase/firestore"
import { db } from "../../firebaseConfig";

import React, { useState, useEffect } from "react";

const NavBar = () => {

  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    const itemsCollection = collection(db, "categories");
    getDocs(itemsCollection).then((res) => {
      let arrayCategories = res.docs.map((category) => {
        return {
          ...category.data(),
          id: category.id
        };
      });
        setCategoryList(arrayCategories)
    })
  }, [])

  return (
    <div className={Styles.containerNavbar}>
      <div className={Styles.navbarIcon}>
   
        <Link to="/" style={{textDecoration: "none"}} >
          <img className={Styles.logoStyle} src="https://res.cloudinary.com/duqtm5tnb/image/upload/v1678509553/descargar_njk8mk.png" alt="Logo" />
        </Link>
   
        <h4 style={{marginLeft:"1rem"}}>GhostVandal <br /> Tu tienda de confianza.</h4>
      </div>
        <ul className={Styles.containerList}>
          {categoryList.map((category) => {
            return (
              <Link key={category.id} to={category.path} style={{textDecoration:"none", color:"black"}}>
                {category.title}
              </Link>
            );
          })}
        </ul>
        <CartWidget />
    </div>
  );
};

export default NavBar