import React from 'react';
import AddButton from '../atoms/AddButton';

function HeaderBar() {
    return(
        <div className="header-bar">
            <span className="header-bar-title absolute-center">TODO LIST</span>
            <AddButton />
        </div>
    )
}

export default HeaderBar;