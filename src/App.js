import Navbar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

function App() {
    return(
        <div>
            <Navbar />
            <ItemListContainer Greetings={"¡Hola!"}/>
            <Footer />
        </div>
    )
}

export default App;