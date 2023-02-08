import './header.scss'
import React, { useState } from 'react';
import {AiOutlineSearch} from 'react-icons/ai'
import { Link } from 'react-router-dom';
export default function Header() {
    const [input, setInput] = useState(null);
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            window.location.href = '/search?filterby=book&keyword='+input;
        }
    }

    return (
        <div className="header">
            <div className="header__search">
                <Link to={'/search?filterby=book&keyword='+input}>
                    <AiOutlineSearch className="header__search__image" size={45}/>
                </Link>
                <input type="search" id="searchbox" placeholder="Search" onInput={e => setInput(e.target.value)} onKeyDown={handleKeyDown}/>
            </div>
        </div>
    );
}