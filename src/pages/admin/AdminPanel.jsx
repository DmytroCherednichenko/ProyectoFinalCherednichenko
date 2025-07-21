import { Container } from "react-bootstrap"
import "./adminpanel.css"
import ManageProducts from "../../components/manageproducts/ManageProducts"
import ProductList from "../../components/productlist/ProductList"

const AdminPanel = (props) => {

    return (
        <Container className="admin-panel">
            <h2>Manage Products</h2>
            <ManageProducts />
            <ProductList />
        </Container>
    )
}

export default AdminPanel