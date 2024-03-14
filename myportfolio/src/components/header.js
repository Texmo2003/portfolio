import React from 'react';

function Header(props) {
    return (
        <div className="">
            <h1>{props.header}</h1>
        </div>
    );
}

export default Header;