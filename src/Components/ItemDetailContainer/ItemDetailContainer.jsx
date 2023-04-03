import { useParams } from "react-router-dom";
import React, { useContext, useState, useEffect } from "react";

import { CartContext } from "../../Context/CartContext";

import {getDoc, collection, doc} from "firebase/firestore"
import { db } from "../../firebaseConfig";

import Swal from "sweetalert2";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {

  const { id } = useParams();

  const { agregarAlCarrito, getQuantityById } = useContext( CartContext )

  const [productSelected, setProductSelected] = useState({})

  useEffect(() => {
    
    const itemCollecion = collection(db, "products")
    const ref = doc(itemCollecion, id)
    
    getDoc(ref)
      .then( res => {
        setProductSelected({
          ...res.data(),
          id: res.id
        })
      })

  }, [id])

  const onAdd = (cantidad)=>{

    let producto = {
     ...productSelected,
      quantity: cantidad
    }
    
    agregarAlCarrito(producto)
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Producto agregado exitosamente',
      showConfirmButton: false,
      timer: 1500
    })
  }

  let quantity = getQuantityById(Number(id))

  return (
      <ItemDetail productSelected={productSelected} onAdd={onAdd} quantity={quantity}/>
  );
};

export default ItemDetailContainer;