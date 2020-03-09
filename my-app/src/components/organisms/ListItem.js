import React from 'react';
import DeleteButton from '../atoms/DeleteButton';
import { Link } from 'react-router-dom';

function ListItem(props) {
    return(
        <Link to="list" params={{ id: props.id }}>
            <div className="list-item">
                <span className="absolute-center list-item-title">
                    {props.title}
                </span>
                <DeleteButton />
            </div>
        </Link>
    )
}

export default ListItem;