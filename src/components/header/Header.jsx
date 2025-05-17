import { Button, Container, Nav, Navbar, NavDropdown, DropdownItem } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./header.css"
import AllCards from "../../pages/allcards/AllCards";

const Header = () => {
    const navigate = useNavigate();
    const isAuth = localStorage.getItem("auth") === "true";

    const cerrarSession = () => {
        localStorage.removeItem("auth");
        navigate("/login");
    };

    return (
        <div className='header'>
            <Navbar collapseOnSelect expand="lg" className="bg-dark">
                <Container className="navbar-wrapper">
                    <Navbar.Brand as={Link} to="/"><img
                        alt=""
                        src="src/assets/mtg-logo.png"
                        width="120px"
                        className="d-inline-block align-top"
                    /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className="text-light" as={Link} to="/">Homepage</Nav.Link>
                            <Nav.Link className="text-light" as={Link} to="/allcards">All Cards</Nav.Link>
                            <NavDropdown title="Filter by Rarity" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Common</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.2">
                                    Uncommon
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.3">Rare</NavDropdown.Item>
                            </NavDropdown>
                            {
                                isAuth && (
                                    <>
                                        <Nav.Link className="text-light" as={Link} to="/profile/lisa_simpson">Mi Cuenta</Nav.Link>
                                        <Nav.Link className="text-light" as={Link} to="/admin">Administración</Nav.Link>
                                    </>
                                )
                            }
                        </Nav>
                        <Nav>
                            {
                                !isAuth ? (<Nav.Link className="text-light" as={Link} to="/login">Login</Nav.Link>)
                                    : (<Button variant="light" onClick={() => cerrarSession()}>Logout</Button>)
                            }
                            <Nav.Link className="text-light" as={Link} to="/cart"><i className="bi bi-cart"></i></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header; 
