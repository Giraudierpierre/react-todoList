import React from 'react';
import ListItem from './ListItem';
import HomeHeaderBar from '../molecules/HomeHeaderBar';

/* Mock data */
function setLocalStorageData() {
    var data = [
        {
            key: 0,
            title: 'Titre1',
        },
        {
            key: 1,
            title: 'Titre2',
        },
        {
            key: 2,
            title: 'Titre3',
        },
        {
            key: 3,
            title: 'Titre4',
        },
        {
            key: 4,
            title: 'Titre5',
        },
        {
            key: 5,
            title: 'Titre6',
        },
        {
            key: 6,
            title: 'Titre7',
        },
        {
            key: 7,
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
        <div>
            <HomeHeaderBar />
            <div className="list">
                {getLocalStorageData().map(function(item, key) {
                    return(
                        <ListItem 
                            key={key}
                            title={item.title}
                        />
                    )
                })}
            </div>
        </div>
    )
}

setLocalStorageData();

export default List;