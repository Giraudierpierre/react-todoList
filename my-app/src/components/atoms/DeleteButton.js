import React from 'react';
import { Link } from 'react-router-dom';

function DeleteButton() {
    return(
        <Link to="/delete">
            <i className="fa fa-trash delete-button" aria-hidden="true"></i>
        </Link>
    );
}

export default DeleteButton;