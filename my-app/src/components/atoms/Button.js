import React from 'react';
import { Link, useHistory } from 'react-router-dom';

function Button(props) {
    let history = useHistory();

    function deleteItem(id) {
        localStorage.removeItem(id);
        //TO BE REPLACED
        window.location.reload();
    }

    return(
            props.type && props.type === 'backButton' ? (
                props.to !== undefined ? (
                    <Link to={props.to ?? ''}>
                        <button className={props.className} onClick={() => history.goBack()}>
                            <i className={props.childrenClassName} aria-hidden="true"></i>
                        </button>
                    </Link>
                ) : 
                (
                    <button className={props.className} onClick={() => history.goBack()}>
                        <i className={props.childrenClassName} aria-hidden="true"></i>
                    </button>
                )
            ) : props.type && (props.type === 'addButton') ? (
                props.to !== undefined ? (
                    <Link to={props.to ?? ''}>
                        <button className={props.className}>+</button>
                    </Link>
                ) : <button className={props.className}>+</button>
            ) : props.type && (props.type === 'deleteButton') ? (
                props.to !== undefined ? (
                    <Link to={props.to ?? ''}>
                        <i className={props.childrenClassName} aria-hidden="true"></i>
                    </Link>
                ) : <i className={props.childrenClassName} aria-hidden="true" onClick={() => deleteItem(props.itemId)}></i>
            ) : null
    );
}

export default Button;