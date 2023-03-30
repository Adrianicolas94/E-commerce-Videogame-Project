
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from './component/navBar';
import {Shop} from './pages/shop/shop'
import {Cart} from './pages/cart/cart'
import { ShopContextProvider } from './context/shop-context';



function App() {
  
  return (
    <div className="App">
      
      <ShopContextProvider>
        <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Shop />}/>
          <Route path="/cart" element={<Cart />}/>
         </Routes>
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;
