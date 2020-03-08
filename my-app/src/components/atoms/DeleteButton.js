import React from 'react';

function DeleteButton() {
    return(
        <a href="/delete">
            <i className="fa fa-trash delete-button" aria-hidden="true"></i>
        </a>
    );
}

export default DeleteButton;