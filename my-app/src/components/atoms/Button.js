import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom'

function CustomButton(props) {
    let history = useHistory();
    return(
        <Link to={props.to ?? ''}>
            {props.type && props.type === 'backButton' ? (
                <button className={props.className} onClick={() => history.goBack()}>
                    <i className={props.childrenClassName} aria-hidden="true"></i>
                </button>
            ) : props.type && (props.type === 'addButton') ? (
                <button className={props.className}>+</button>
            ) : props.type && (props.type === 'deleteButton') ? (
                <i className={props.childrenClassName} aria-hidden="true"></i>
            ) : null}
        </Link>
    );
}

export default CustomButton;