import { Container, Spinner } from "react-bootstrap"

function UserProfile() {
    return (
        <Container className="homepage-loading"><Spinner animation="border" variant="secondary" /></Container>
    )
}

export default UserProfile