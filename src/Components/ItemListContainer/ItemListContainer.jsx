import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import PacmanLoader from "react-spinners/PacmanLoader";

import { db } from "../../firebaseConfig";
import {collection, getDocs, query, where} from "firebase/firestore";

const ItemListContainer = () => {

    const {categoryName} = useParams();
  
    const [items, setItems] = useState([]);

    useEffect(() => {
      const itemsCollection = collection(db, "products")
      let request = undefined

      if (categoryName){
        const q = query(itemsCollection, where("category", "==", categoryName))
        request = getDocs(q)
      } else {
        request = getDocs(itemsCollection)
      }
          
      request.then(res => {
        let products = res.docs.map( (product)=>{
          return{
            ...product.data(),
            id: product.id
          };
        });
          setItems(products)
      });
    }, [categoryName]);

    if (items.length === 0) {
      return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" ,height: "80vh" }}>
          <PacmanLoader
            color={"cornflowerblue"}
            // loading={loading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
            speedMultiplier={2}
          />
        </div>
      );
    }
  
    return (
      <div> 
        <ItemList items={items} />
      </div>
    );
  };
  
  export default ItemListContainer