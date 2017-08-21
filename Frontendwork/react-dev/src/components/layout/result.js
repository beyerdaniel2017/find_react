import React from 'react';
import { Weather } from '../inc/weather';
import { Video } from '../inc/video';
import { ResultItem } from '../results/resultItem';
import _ from 'lodash';
import { SearchBar } from '../inc/searchBar';
import { NavLink } from 'react-router-dom';


const Result = () => (
    <div>
        <div className='heading-wrapper result-page'>
            <div className='video-wreapper'>
                <Video />
            </div>
            <div className='video-overlay' />
            <header className='header'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-7 col-xs-5 content-wrapper result-header'>
                            <NavLink to='/'><img className='logo' src='images/logo.png' alt='Findious' /></NavLink>
                            <div className='wrapper-inner hidden-xs hidden-sm'> <SearchBar /></div>
                        </div>
                        <div className='col-xs-7 col-md-4 text-right'>
                            <button className='plus-btn'><i className='fa fa-plus' /></button>
                            <Weather />
                        </div>
                    </div>
                </div>
            </header>
            <section className='result-content'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-1 filter-wrapper'>
                            <div className='filter'>
                                <h4>Filter</h4>
                                <ul className='clearfix'>
                                    <li> <a href='#'><i className='fa fa-play-circle-o' aria-hidden='true' />videos</a> <span className='selected'><i className='fa fa-check' /></span> </li>
                                    <li> <a href='#'><i className='fa fa-volume-up' aria-hidden='true' />audios</a> </li>
                                    <li> <a href='#'><i className='fa fa-camera' aria-hidden='true' />images</a> </li>
                                    <li> <a href='#'><i className='fa fa-map-marker' aria-hidden='true' />mav view</a> </li>
                                    <li> <a href='#'><i className='fa fa-expand' aria-hidden='true' />furtherest</a> </li>
                                    <li> <a href='#'><i className='fa fa-compress' aria-hidden='true' />nearest</a> </li>
                                    <li> <a href='#'><i className='fa fa-line-chart' aria-hidden='true' />popular</a> </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-md-10 col-md-offset-2'>
                            <div className='row'>

                                {_.times(10, i =>
                                    <ResultItem
                                        imgLink='images/results.jpg'
                                        businessName='Business name'
                                        phone='8763327908'
                                        address='123 White Street, Kingston'
                                        url='www.nice.com'
                                        email='&#110;&#105;&#099;&#101;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;'
                                    />

                                )}


                                <div className='page-pagination'>
                                    <ul className='clearfix'>
                                        <li><a href='#'>1</a></li>
                                        <li><a href='#'>2</a></li>
                                        <li><a href='#'>3</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='row'>

                                {_.times(10, i =>
                                    <div className='col-20 col-xs-6 col-sm-3 small'>
                                        <div className='result-item'>
                                            <h3>Business name</h3>
                                            <ul className='list-info list-unstyled'>
                                                <li><a href='tel:8763327908'>876-332-7908</a></li>
                                                <li>123 White Street, Kingston </li>
                                                <li><a href='www.nice.com'>www.nice.com</a></li>
                                                <li><a href='mailto:&#110;&#105;&#099;&#101;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;'>&#110;&#105;&#099;&#101;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                )}


                                <div className='page-pagination'>
                                    <ul className='clearfix'>
                                        <li><a href='#'>1</a></li>
                                        <li><a href='#'>2</a></li>
                                        <li><a href='#'>3</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
);

export { Result };