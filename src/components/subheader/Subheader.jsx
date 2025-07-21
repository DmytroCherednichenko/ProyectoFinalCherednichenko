import { useState } from 'react';
import './subheader.css';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';



function Subheader() {
    const [searchInput, setSearchInput] = useState('');
    const navigate = useNavigate();


    const handleSearch = () => {
        if (searchInput.toString().trim()) {
            navigate(`/search/${searchInput}`);
        }
    };

    return (
        <Form className="subheader-strip">
            <Form.Control
                type="text"
                placeholder="Search cards..."
                className="subheader-search"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
            />
            <Button className="search-btn btn btn-light" onClick={() => handleSearch()}>
                Search
            </Button>
        </Form>
    );
};

export default Subheader;