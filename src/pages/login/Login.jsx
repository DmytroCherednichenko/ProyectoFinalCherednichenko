import { useNavigate } from "react-router-dom";
import { Container, Button, Form } from "react-bootstrap";
import "./login.css"
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";

const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        // localStorage.setItem("auth", "true");
        // navigate("/profile/bart_simpson");
        if (user === 'admin' && password === '1234') {
            login(user);
            navigate('/admin');
        } else {
            alert('Credenciales incorrectas');
        }
    };

    return (
        <Container className="login-page">
            <h2 className="login-message">To enter, use admin as username and 1234 as password</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control className="form-field" type="text" placeholder="Enter username" onChange={(e)=>setUser(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className="form-field" type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>
                <Button variant="dark" type="submit">
                    Login
                </Button>
            </Form>
        </Container>
    )
}

export default Login;