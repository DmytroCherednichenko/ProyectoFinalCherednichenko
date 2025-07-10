import { useState, useEffect } from "react";
import { createContext } from "react";
import { getAllProducts } from "../assets/api-call-functions";


export const ProductsContext = createContext();



export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        async function loadProducts() {
            const data = await getAllProducts();
            setProducts(data.cards.filter(item => item.imageUrl));
            setLoading(false);
        }
        loadProducts();
    }, [])

    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    );

};