import React from 'react';
import ListItem from './ListItem';
import { Link } from 'react-router-dom';

function List() {
    function getLocalStorageData() {
        let items = [];
        for (let i = 0; i < localStorage.length; i++) {
            items.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }

        let sortItems = items.sort(
            (a,b) => 
            (new Date(b.date) - new Date(a.date)) || (b.id - a.id)
        );

        return sortItems;
    }

    return(
        <>
        {(getLocalStorageData().length > 0) ? (
            <div className="list">
                {getLocalStorageData().map(function(item, id) {
                    const url = "/item/";
                    return(
                        <Link to={{pathname: url + id}} key={"link" + id}> 
                            <ListItem 
                                key={id}
                                id={id}
                                title={item.text}
                                date={item.date}
                            />
                        </Link>
                    )
                })}
            </div>
        ) : <p className="empty-list-message">Créez votre première note !</p> }
        </>
    )
}

export default List;