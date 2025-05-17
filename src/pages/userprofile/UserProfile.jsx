import { Container } from "react-bootstrap"
import { useParams } from "react-router-dom"
import "./userprofile.css"

function UserProfile() { 
    const {username} = useParams();
    
    console.log(username);
    return (
        <Container className="user-profile-page">
            <h1>Welcome, {username}</h1>
        </Container>
    )
}

export default UserProfile