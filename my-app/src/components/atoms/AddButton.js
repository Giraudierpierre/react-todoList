import React from 'react';
import { Link } from 'react-router-dom';

function AddButton() {
    return(
        <Link to="/create">
            <span className="add-button">+</span>
        </Link>
    );
}

export default AddButton;