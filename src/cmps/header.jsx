import React, { useState } from 'react';
import Hamburger from './hamburger.jsx'

const Header = () => {
    const [isOpened, setIsOpened] = useState(false);

    const toggleUl=()=>{
        setIsOpened(!isOpened)
    }
    return (
        <header>
            <h1>My App</h1>
            <Hamburger  toggleUl={toggleUl}/>
            <ul className={`${isOpened ? 'open' : ''}`}>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </header>
    )
}

export default Header
