import React from 'react';
import AddButton from '../atoms/AddButton';
import { useLocation } from 'react-router-dom'
import BackButton from '../atoms/BackButton';

function HeaderBar() {
    let location = useLocation().pathname;
    return(
        <div className="header-bar">
            {location !== '/' ? <BackButton /> : null}
            <span className="header-bar-title absolute-center">TODO LIST</span>
            {location === '/' ? <AddButton /> : null}
        </div>
    )
}

export default HeaderBar;