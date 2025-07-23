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
import ProductDetails from './pages/product-details/ProductDetails';
import { CartProvider } from './Context/CartContext';
import { AuthProvider } from './Context/AuthContext';
import { ProductsProvider } from './Context/ProductsContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Subheader from './components/subheader/subheader';
import SearchedProducts from './pages/search-products/SearchProducts';
import { HelmetProvider } from 'react-helmet-async';




function App() {

  return (
    <>
      <HelmetProvider>
        <ToastContainer />
        <BrowserRouter>
          <ProductsProvider>
            <CartProvider>
              <AuthProvider>
                <Header />
                <Subheader></Subheader>
                <Routes>
                  <Route path='/' element={<Homepage />}></Route>
                  <Route path='/ProyectoFinalCherednichenko/' element={<Homepage />}></Route>
                  <Route path='/allcards' element={<AllCards />}></Route>
                  <Route path='category/:rarity' element={<CategoryPage />}></Route>
                  <Route path='item/:id' element={<ProductDetails />}></Route>
                  <Route path='/login' element={<Login />}></Route>
                  <Route path='/admin' element={<ProtectedRoute><AdminPanel /></ProtectedRoute>}></Route>
                  <Route path='profile/:username' element={<ProtectedRoute><UserProfile /></ProtectedRoute>}></Route>
                  <Route path='/cart' element={<Cart />}></Route>
                  <Route path="/search/:userInput" element={<SearchedProducts />} />
                </Routes>
                <Footer />
              </AuthProvider>
            </CartProvider>
          </ProductsProvider>
        </BrowserRouter>
      </HelmetProvider>


    </>
  )
}

export default App
