import React from 'react';
import Button from '../atoms/Button';
import { Link } from 'react-router-dom';

function ListItem(props) {
    const url = "/item/";

    return(
        <div className="list-item">
            <Link to={{pathname: url + props.id}} key={"link" + props.id}> 
                <div className="absolute-center list-item-content">
                    <span>{props.title}</span>
                    <small>{props.date}</small>
                </div>
            </Link>
            <Button
            itemId={props.id}
            childrenClassName="fa fa-trash delete-button"
            type="deleteButton"
            />
        </div>
    )
}

export default ListItem;