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
import ProductDetails from './pages/product-details/ProductDetails';
import { CartProvider } from './Context/CartContext';



function App() {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (productID) => {
    setCartItems((prevCartItems) => ({
      ...prevCartItems,
      [productID]: (prevCartItems[productID] || 0) + 1,
    }));
  };

  const removeFromCart = (idToRemove) => {
    setCartItems((prevCartItems) => {
      const currentQuantity = prevCartItems[idToRemove];

      if (!currentQuantity) return prevCartItems;

      const updatedCart = { ...prevCartItems };

      if (currentQuantity === 1) {
        delete updatedCart[idToRemove];
      } else {
        updatedCart[idToRemove] = currentQuantity - 1;
      }

      return updatedCart;
    });
  };

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Homepage />}></Route>
            <Route path='/allcards' element={<AllCards />}></Route>
            <Route path='category/:rarity' element={<CategoryPage />}></Route>
            <Route path='item/:id' element={<ProductDetails />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/admin' element={<ProtectedRoute><AdminPanel /></ProtectedRoute>}></Route>
            <Route path='profile/:username' element={<ProtectedRoute><UserProfile /></ProtectedRoute>}></Route>
            <Route path='/cart' element={<Cart cartItems={cartItems} />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
