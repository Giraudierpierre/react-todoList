import React from 'react';
import ListItem from './ListItem';

function List() {
    function getLocalStorageData() {
        let items = [];
        for(let i = 0; i < localStorage.length; i++) {
            items.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
    
        return items;
    }
    return(
        <>
        {(getLocalStorageData().length > 0) ? (
            <div className="list">
                {getLocalStorageData().map(function(item, id) {
                        return(
                            <ListItem 
                                key={id}
                                id={id}
                                title={item.text}
                                date={item.date}
                            />
                        )
                    })}
            </div>
        ) : <p className="empty-list-message">Créez votre première note !</p> }
        </>
    )
}

export default List;