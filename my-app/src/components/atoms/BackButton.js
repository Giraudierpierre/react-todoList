import React from 'react';

function BackButton() {
    return(
        <button className="back-button" onClick={historyBack}>
            <i className="fa fa-long-arrow-left"></i>
        </button>
    );
}

function historyBack() {
    window.history.back();
}

export default BackButton;