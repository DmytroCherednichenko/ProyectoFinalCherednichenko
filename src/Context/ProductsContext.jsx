import { useState, useEffect } from "react";
import { createContext } from "react";
import { getAllProducts } from "../assets/api-call-functions";


export const ProductsContext = createContext();



export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function loadProducts() {
            const data = await getAllProducts();
            setProducts(data.cards.filter(item => item.imageUrl));
        }
        loadProducts();
    }, [])

    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    );

};