import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Cart from "./Components/Cart/Cart";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return(
        <div>
            <BrowserRouter>
                
                <NavBar />
                
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
                
                <Footer />
            
            </BrowserRouter>
        </div>
    )
}

export default App;