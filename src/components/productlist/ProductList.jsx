import React from 'react'
import { Table, Button } from 'react-bootstrap';
import { useContext } from "react";
import { ProductsContext } from "../../Context/ProductsContext";



function ProductList() {

    const { updateProduct, addProduct, deleteProduct, editProduct, productToEdit, setProductToEdit, products } = useContext(ProductsContext);
    const onEdit = editProduct;
    const onDelete = deleteProduct;


    if (products.length === 0) {
        return <p>No hay productos cargados.</p>;
    }

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th style={{ width: '150px' }}>Actions</th>
                </tr>
            </thead>
            <tbody>
                {products.map(({ id, name, price }) => (
                    <tr key={id}>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{price}</td>
                        <td>
                            <Button
                                variant="warning"
                                size="sm"
                                className="me-2"
                                onClick={() => onEdit({ multiverseid, nombre, precio })}
                            >
                                Editar
                            </Button>
                            <Button
                                variant="danger"
                                size="sm"
                                onClick={() => onDelete(multiverseid)}
                            >
                                Borrar
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default ProductList

