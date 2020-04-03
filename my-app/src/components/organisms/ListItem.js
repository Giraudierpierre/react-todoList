import React from 'react';
import Button from '../atoms/Button';

function ListItem(props) {
    return(
        <div className="list-item">
            <span className="absolute-center list-item-title">
                {props.title}
            </span>
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