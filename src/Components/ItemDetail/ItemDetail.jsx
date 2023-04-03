import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import  "./ItemDetail.css";

const ItemDetail = ({productSelected, onAdd, quantity}) => {
  return (
    <div>
        <div className={"containerItemDetail"}>
      <div className={"containerImage"}>
        <img src={productSelected.img} alt="" />
      </div>

      <div className={"containerDetail"}>
        <h2 style={{ fontFamily: "monospace" }}>
          <span style={{ fontSize: "23px" }}>Nombre:</span>{" "}
          {productSelected.title}
        </h2>
        <h2 style={{ fontFamily: "monospace" }}>
          <span style={{ fontSize: "23px" }}>Descripcion:</span>{" "}
          {productSelected.description}
        </h2>
        <h2 style={{ fontFamily: "monospace" }}>
          <span style={{ fontSize: "23px" }}>Precio:</span> $
          {productSelected.price} COP
        </h2>

        <ItemCount onAdd={onAdd} stock={productSelected.stock} initial={quantity} />
      </div>
      </div>
    </div>
  )
}

export default ItemDetail