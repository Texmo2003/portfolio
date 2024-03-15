import React from 'react';

function Header(props) {
    return (
        <div className=' bg-blue-200 w-auto h-auto'>
            <h1 className=' relative'>{props.header}</h1>
        </div>
    );
}

export default Header;