import React from 'react';
import BannerComponent from './BannerComponent';
import './Home.css';

export const HomeComponent = () => {
    return (
        <div className='home'>
            <h1>Home Component</h1>

            <BannerComponent />
        </div>
    )
}
