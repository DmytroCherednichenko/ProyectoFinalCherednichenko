import { Container } from "react-bootstrap"
import { useParams } from "react-router-dom"
import "./userprofile.css"
import avatar from "../../assets/avatar.jpeg";

function UserProfile() { 
    const {username} = useParams();
    
    console.log(username);
    return (
        <Container className="user-profile-page py-5">
            <div className="text-center mb-4">
                <img
                    src={avatar}
                    alt="Profile Avatar"
                    className="rounded-circle mb-3"
                    style={{
                        width: "150px"
                    }}
                />
                <h2>{username}</h2>
                <p className="text-muted">Magic: The Gathering Enthusiast</p>
            </div>

            <div className="mb-4">
                <h5>About</h5>
                <p>
                    Hey meatbags! I am Bender and I love MTG! Who want's to play?
                </p>
            </div>
            <div className="mb-4">
                <h5>Public Email</h5>
                <p>
                    bender@ilovebender.com
                </p>
            </div>

            <div className="mb-4">
                <h5>Stats</h5>
                <ul className="list-group">
                    <li className="list-group-item">Total Cards Collected: 1234</li>
                    <li className="list-group-item">Decks Built: 12</li>
                    <li className="list-group-item">Favorite Format: Commander</li>
                </ul>
            </div>
        </Container>
    )
}

export default UserProfile