import React from 'react'
import { Table, Button, Container, Modal } from 'react-bootstrap';
import { useContext } from "react";
import { ProductsContext } from "../../Context/ProductsContext";
import "./productlist.css";
import { toast } from 'react-toastify';



function ProductList() {

    const { updateProduct, addProduct, deleteProduct, editProduct, productToEdit, setProductToEdit, products } = useContext(ProductsContext);
    const onEdit = editProduct;
    const onDelete = deleteProduct;
    const [showConfirm, setShowConfirm] = React.useState(false);
    const [productToDelete, setProductToDelete] = React.useState(null);

    const handleDeleteClick = (product) => {
        setProductToDelete(product);
        setShowConfirm(true);
    };

    const confirmDelete = () => {
        onDelete(productToDelete.id);
        setShowConfirm(false);
        toast.success(`Deleted "${productToDelete.name}" successfully!`);
    };


    if (products.length === 0) {
        return <p>No hay productos cargados.</p>;
    }

    return (
        <Container fluid className='prodList-wrap'>
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
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>${product.price}</td>
                            <td>
                                <Button
                                    variant="warning"
                                    size="sm"
                                    className="me-2"
                                    onClick={() => onEdit(product)}
                                >
                                    Edit
                                </Button>
                                <Button
                                    variant="danger"
                                    size="sm"
                                    onClick={() => handleDeleteClick(product)}
                                >
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Modal show={showConfirm} onHide={() => setShowConfirm(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete <strong>{productToDelete?.name}</strong>?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowConfirm(false)}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={confirmDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export default ProductList

