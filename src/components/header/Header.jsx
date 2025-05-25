import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink, useNavigate, useMatch } from "react-router-dom";
import "./header.css"
import AllCards from "../../pages/allcards/AllCards";

const Header = () => {
    const navigate = useNavigate();
    const isAuth = localStorage.getItem("auth") === "true";

    const cerrarSession = () => {
        localStorage.removeItem("auth");
        navigate("/login");
    };

    const match = useMatch("/category/:rarity");

    const isDropdownActive = Boolean(match);

    console.log(isDropdownActive)

    return (
        <div className='header'>
            <Navbar collapseOnSelect expand="lg" className="bg-dark" variant="dark">
                <Container className="navbar-wrapper">
                    <Navbar.Brand as={NavLink} to="/" className={({ isActive }) => isActive ? 'text-warning fw-bold' : 'text-light'}><img
                        alt=""
                        src="src/assets/mtg-logo.png"
                        width="120px"
                        className="d-inline-block align-top"
                    /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'text-warning fw-bold' : 'text-light'}`}>
                                Home
                            </NavLink>
                            <NavLink to="/allcards" className={({ isActive }) => `nav-link ${isActive ? 'text-warning fw-bold' : 'text-light'}`}>
                                All Cards
                            </NavLink>
                            <NavDropdown
                                id="basic-nav-dropdown"
                                className={`rarity-dropdown ${isDropdownActive ? 'text-warning fw-bold' : 'text-light'}`}
                                title={
                                    <span className={isDropdownActive ? 'text-warning fw-bold' : 'text-light'}>
                                        Filter by Rarity
                                    </span>
                                }
                            >
                                <NavDropdown.Item as="div">
                                    <NavLink to="category/common" className={({ isActive }) => `dropdown-item ${isActive ? 'fw-bold' : 'text-dark'}`}>
                                        Common
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as="div">
                                    <NavLink to="category/uncommon" className={({ isActive }) => `dropdown-item ${isActive ? 'fw-bold' : 'text-dark'}`}>
                                        Uncommon
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as="div">
                                    <NavLink to="category/rare" className={({ isActive }) => `dropdown-item ${isActive ? 'fw-bold' : 'text-dark'}`}>
                                        Rare
                                    </NavLink>
                                </NavDropdown.Item>
                            </NavDropdown>
                            {
                                isAuth && (
                                    <>
                                        <Nav.Link className={({ isActive }) => isActive ? 'text-warning fw-bold' : 'text-light'} as={NavLink} to="profile/bart_simpson">Account</Nav.Link>
                                        <Nav.Link className={({ isActive }) => isActive ? 'text-warning fw-bold' : 'text-light'} as={NavLink} to="/admin">Admin</Nav.Link>
                                    </>
                                )
                            }
                        </Nav>
                        <Nav>
                            {
                                !isAuth ? (<NavLink className={({ isActive }) => `nav-link ${isActive ? 'text-warning fw-bold' : 'text-light'}`} to="/login">Login</NavLink>)
                                    : (<Button variant="outline-light" onClick={() => cerrarSession()}>Logout</Button>)
                            }
                            <NavLink to="/cart" className={({ isActive }) => `nav-link ${isActive ? 'text-warning fw-bold' : 'text-light'}`}>
                                <i className="bi bi-cart"></i>
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    )
}

export default Header; 
