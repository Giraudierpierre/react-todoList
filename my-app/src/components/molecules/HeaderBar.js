import React from 'react';
import Button from '../atoms/Button';
import { useLocation } from 'react-router-dom'

function HeaderBar() {
    let location = useLocation().pathname;
    return(
        <div className={`header-bar${location === '/' ? " homepage" : ""}`}>
            {location !== '/' ? 
                <Button 
                className="back-button" 
                childrenClassName="fa fa-long-arrow-left"
                type="backButton"
                /> 
            : null}
            <span className="header-bar-title absolute-center">TODO LIST</span>
            {location === '/' ? 
                <Button 
                to="/create" 
                className="add-button" 
                type="addButton"
                />
            : null
            }
        </div>
    )
}

export default HeaderBar;