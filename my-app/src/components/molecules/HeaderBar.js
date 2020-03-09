import React from 'react';
import AddButton from '../atoms/AddButton';
import { useLocation } from 'react-router-dom'

function HeaderBar() {
    let location = useLocation().pathname;
    return(
        <div className="header-bar">
            <span className="header-bar-title absolute-center">TODO LIST</span>
            {location === '/' ? <AddButton /> : null}
        </div>
    )
}

export default HeaderBar;