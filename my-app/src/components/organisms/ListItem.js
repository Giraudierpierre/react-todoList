import React from 'react';
import Button from '../atoms/Button';
import { Link } from 'react-router-dom';

function ListItem(props) {
    return(
        <div className="list-item">
            <Link to="list" params={{ id: props.id }}>
                <span className="absolute-center list-item-title">
                    {props.title}
                </span>
            </Link>
            <span className="absolute-center list-item-date">
                {props.date}
            </span>
            {/* <Button
            to="/delete"
            childrenClassName="fa fa-trash delete-button"
            type="deleteButton"
            /> */}
        </div>
    )
}

export default ListItem;