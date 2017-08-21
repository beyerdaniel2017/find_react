import React from 'react';
import { Weather } from '../inc/weather';
import { OverlayBox } from '../inc/overlayBox';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header className='header'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 col-xs-5'>
                    <NavLink to='/'><img className='logo' src='images/logo.png' alt='Findious' /></NavLink>
                </div>
                <div className='col-xs-7 col-md-6 text-right'>
                    <button className='plus-btn' id='menu-trigger'><i className='fa fa-plus' /></button>
                    <OverlayBox />
                    <Weather />
                </div>
            </div>
        </div>
    </header>
);

export { Header };