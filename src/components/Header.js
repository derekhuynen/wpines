import React from 'react'
import '../css/Header.css'
import SearchIcon from "@material-ui/icons/Search";
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

            <div className='header__center'>
                <input type="text" />
                <SearchIcon />
            </div>
        </div>
    )
}

export default Header