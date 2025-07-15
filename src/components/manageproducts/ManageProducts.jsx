import { useState, useEffect, useContext } from "react";
import { Button, Form, Alert, Col, Row } from "react-bootstrap";
import { ProductsContext } from "../../Context/ProductsContext";


function ManageProducts() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [errors, setErrors] = useState([]);

    const { updateProduct, addProduct, deleteProduct, editProduct, productToEdit, setProductToEdit, products } = useContext(ProductsContext);


    const onSubmit = productToEdit ? updateProduct : addProduct;
    const onCancel = () => setProductToEdit(null);

    useEffect(() => {
        if (productToEdit) {
            setName(productToEdit.name);
            setPrice(productToEdit.price.toString());
            setErrors([]);
        } else {
            setName('');
            setPrice('');
            setErrors([]);
        }
    }, [productToEdit]);

    const validate = () => {
        const errorsValidation = [];
        if (!name.trim()) {
            errorsValidation.push('The name can not be empty.');
        }
        if (price === '' || isNaN(price) || Number(price) <= 0) {
            errorsValidation.push('The price has to be a number greater than 0.');
        }
        setErrors(errorsValidation);
        return errorsValidation.length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        const product = {
            name: name.trim(),
            price: Number(price),
        };

        if (productToEdit) {
            product.id = productToEdit.id;
        }

        onSubmit(product);

        if (!productToEdit) {
            setName('');
            setPrice('');
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            {errors.length > 0 && (
                <Alert variant="danger">
                    <ul>
                        {errors.map((err, idx) => (
                            <li key={idx}>{err}</li>
                        ))}
                    </ul>
                </Alert>
            )}

            <Form.Group as={Row} className="mb-3" controlId="name">
                <Form.Label column sm={2}>Name</Form.Label>
                <Col sm={10}>
                    <Form.Control
                        type="text"
                        placeholder="Name of the product"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="price">
                <Form.Label column sm={2}>Price</Form.Label>
                <Col sm={10}>
                    <Form.Control
                        type="number"
                        placeholder="Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        min="0"
                        step="0.01"
                    />
                </Col>
            </Form.Group>

            <Button variant="primary" type="submit" className="me-2">
                {productToEdit ? 'Update' : 'Add'}
            </Button>

            {productToEdit && (
                <Button variant="secondary" onClick={onCancel}>
                    Cancel
                </Button>
            )}
        </Form>
    );
}

export default ManageProducts