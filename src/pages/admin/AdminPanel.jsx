import { Container, Spinner } from "react-bootstrap"
import "./adminpanel.css"
import { useState, useEffect } from "react"

const AdminPanel = (props) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    if (loading) return <Container className="homepage-loading"><Spinner animation="border" variant="secondary" /></Container>

    return (
        <Container className="admin-panel">

        </Container>
    )
}

export default AdminPanel