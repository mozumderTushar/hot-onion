import React from 'react';
import Header from '../Header/Header';
import BannerBg from '../../img/logo/bannerbackground.png'
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <Header/>
            <div className="banner-container" style={{ backgroundImage: `url(${BannerBg})` }}>
            <h1>Best Food Is Waiting For Your Belly</h1>
            <div className="search-container">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Search Food Item" aria-label="Username" aria-describedby="basic-addon1"></input>
                    <div className="input-group-prepend">
                        <button className="input-group-text btn-search">Search</button>
                    </div>

                </div>
            </div>
        </div>
        </div>
    );
};

export default Banner;