import { useState, useEffect } from "react";
import { createContext } from "react";
import { getAllProducts } from "../assets/api-call-functions";


export const ProductsContext = createContext();



export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [productToEdit, setProductToEdit] = useState(null);
    const [counterId, setCounterId] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const addProduct = (product) => {
        const newProduct = { ...product, id: products.length + 1 };
        setProducts([...products, newProduct]);
        setCounterId(counterId + 1);
    };

    const updateProduct = (updatedProduct) => {
        setProducts(prev =>
            prev.map(product =>
                product.id === updatedProduct.id ? updatedProduct : product
            )
        );
    };

    const deleteProduct = (id) => {
        setProducts(prev => prev.filter(product => product.id !== id));
    };

    const editProduct = (product) => {
        setProductToEdit(product);
    };



    useEffect(() => {
        async function loadProducts() {
            try {
                const data = await getAllProducts();
                const filtered = data.cards
                    .filter(item => item.imageUrl && item.multiverseid?.[4] && item.multiverseid[4] !== "0");

                const pricedProducts = filtered.map((product, index) => ({
                    ...product,
                    price: `${product.multiverseid[4] || ''}${product.multiverseid[5] || ''}`,
                    id: index + 1,
                }));

                setProducts(pricedProducts);
                setError(null); // clear any previous error
            } catch (err) {
                console.error("Failed to load products:", err);
                setError("Failed to load products. Please try again later.");
            } finally {
                setLoading(false);
            }
        }
        loadProducts();
    }, []);

    return (
        <ProductsContext.Provider value={{
            products, setProducts,
            addProduct, updateProduct,
            productToEdit, setProductToEdit,
            editProduct, deleteProduct, error,
        }}>
            {children}
        </ProductsContext.Provider>
    );

};