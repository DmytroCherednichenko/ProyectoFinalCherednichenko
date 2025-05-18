import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from "./components/header/Header";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import AllCards from './pages/allcards/AllCards';
import Homepage from './pages/homepage/Homepage';
import CategoryPage from './pages/product-category/CategoryPage'
import Login from './pages/login/Login';
import Cart from './pages/cart/Cart';
import ProtectedRoute from './components/protectedroute/ProtectedRoute';
import AdminPanel from './pages/admin/AdminPanel';
import UserProfile from './pages/userprofile/UserProfile';
import { useState, useEffect } from 'react';



function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (productID) => {
    setCartItems([...cartItems, productID]);
  };

  const removeFromCart = (idToRemove) => {
    console.log(`Id to remove is ${idToRemove}`);
    setCartItems(prevCartItems =>
      prevCartItems.filter(item => item !== idToRemove)
    );
  };

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/allcards' element={<AllCards addToCart={addToCart} />}></Route>
          <Route path='category/:rarity' element={<CategoryPage addToCart={addToCart} />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/admin' element={<ProtectedRoute><AdminPanel /></ProtectedRoute>}></Route>
          <Route path='profile/:username' element={<ProtectedRoute><UserProfile /></ProtectedRoute>}></Route>
          <Route path='/cart' element={<Cart cartItems={cartItems} removeFromCart={removeFromCart}/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
