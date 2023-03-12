import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Cart from "./Components/Cart/Cart";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";

function App() {
    return(
        <div>
            <BrowserRouter>
                
                <NavBar />
                
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/category/:categoryName" element={<ItemListContainer />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="*" element={<h1>error 404: Not found </h1>} />
                    <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
                </Routes>
                
                <Footer />
            
            </BrowserRouter>
        </div>
    )
}

export default App;