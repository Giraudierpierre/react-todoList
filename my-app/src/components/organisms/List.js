import React from 'react';
import ListItem from './ListItem';

/* Mock data */
function setLocalStorageData() {
    var data = [
        {
            id: 0,
            title: 'Titre1',
        },
        {
            id: 1,
            title: 'Titre2',
        },
        {
            id: 2,
            title: 'Titre3',
        },
        {
            id: 3,
            title: 'Titre4',
        },
        {
            id: 4,
            title: 'Titre5',
        },
        {
            id: 5,
            title: 'Titre6',
        },
        {
            id: 6,
            title: 'Titre7',
        },
        {
            id: 7,
            title: 'Titre8',
        }
    ];

    localStorage.setItem('listItems', JSON.stringify(data));
}

function getLocalStorageData() {
    var items = JSON.parse(localStorage.getItem('listItems'));
    return items;
}

function List() {
    return(
        <>
            <div className="list">
                {getLocalStorageData().map(function(item, id) {
                    return(
                        <ListItem 
                            key={id}
                            title={item.title}
                        />
                    )
                })}
            </div>
        </>
    )
}

setLocalStorageData();

export default List;