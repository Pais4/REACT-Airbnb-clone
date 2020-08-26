import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';

export const HeaderComponent = () => {
    return (
        <div className='header'>
            <img
                className='header__icon'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1280px-Airbnb_Logo_B%C3%A9lo.svg.png'
                alt='Airbnb'
            />

            <div className='header__center'>
                <input 
                    type='text'
                />
                <SearchIcon />
            </div>
        </div>
    )
}
