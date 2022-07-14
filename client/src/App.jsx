import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar"
import ModalAdd from "./components/ModalAdd";

const App = () => {
  return (
<Router>
  <Navbar/>
  <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route path="/products/:plec" element={<ProductList/>}/>
    <Route path="/products/:plec/:kategoria" element={<ProductList/>}/>
    <Route path="/products/:plec/:kategoria/:podkategoria" element={<ProductList/>}/>
    <Route path="/product/:id" element={<SingleProduct/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="account/rejestracja" element={<Register/>}/>
    <Route path="account/zaloguj" element={<Login/>}/>
    <Route path="/modal" element={<ModalAdd/>}/>
  </Routes>
</Router>
  )
};

export default App;