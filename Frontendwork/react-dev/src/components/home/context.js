import React from 'react';
import { Link } from 'react-router-dom';
import { SearchBar } from '../inc/searchBar';

const Context = () => (
    <div className='content-wrapper'>
        <div className='container text-center'>
            <div className='banner-text'>
                <h1>Easy, Elegant local Search</h1>
                <h2><b>Findious</b> discovering local busineses and experiences.</h2>
            </div>
            <div className='input-wrapper'>
                <div className='wrapper-inner'>
                    <SearchBar />
                </div>
            </div>
            <p className='big-text'>findious</p>
        </div>
    </div>
);

export { Context };