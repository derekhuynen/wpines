import React from 'react'
import '../css/Header.css'
import { Link } from "react-router-dom";
import Logo from '../CabinPhotos/PinesCabinsLogo.png'


function Header() {
    return (
        <div className='header'>
            <Link to='/'>
                <img
                    className="header__icon"
                    src= {Logo}
                    alt=""
                />
            </Link>

        </div>
    )
}

export default Header