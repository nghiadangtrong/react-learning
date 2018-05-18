import React from 'react';

export const Header = (props)=>{
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <h3>{props.homeLink}</h3>
                    <h2>{props.children}</h2>
                </div>
            </div>
        </nav>
    );
}