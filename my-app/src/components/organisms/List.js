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
            new Date(b.date) - new Date(a.date) || new Date(b.time) - new Date(a.time)
        );

        return sortItems;
    }

    return(
        <>
        {(getLocalStorageData().length > 0) ? (
            <div className="list">
                {getLocalStorageData().map(function(item) {
                    const url = "/item/";
                    return(
                        <Link to={{pathname: url + item.id}} key={"link" + item.id}> 
                            <ListItem 
                                key={item.id}
                                id={item.id}
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