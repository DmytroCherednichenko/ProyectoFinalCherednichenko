import { Container } from "react-bootstrap"
import "./adminpanel.css"
import ManageProducts from "../../components/manageproducts/ManageProducts"
import ProductList from "../../components/productlist/ProductList"
import { useContext } from "react"
import { ProductsContext } from "../../Context/ProductsContext"

const AdminPanel = (props) => {

    return (
        <Container className="admin-panel">
            <ManageProducts />
            <ProductList />
        </Container>
    )
}

export default AdminPanel