import React from 'react';
import DeleteButton from '../atoms/DeleteButton';

function ListItem(props) {
    return(
        <a href="/">
            <div className="list-item">
                <span className="absolute-center list-item-title">
                    {props.title}
                </span>
                <DeleteButton />
            </div>
        </a>
    )
}

export default ListItem;