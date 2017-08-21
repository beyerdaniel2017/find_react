import React from 'react';
import { Weather } from '../inc/weather';
import { SearchBar } from '../inc/searchBar';
import { OverlayBox } from '../inc/overlayBox';
import { Gallery } from '../landing/gallery';
import { Testimonal } from '../landing/testimonal';
import { Insight } from '../landing/insight';
import { Contacts } from '../landing/contacts';
import { NavLink } from 'react-router-dom';
import _ from 'lodash';

const Landing = () => (
    <div className='user-page red'>
        <div className='heading-wrapper result-page'>
            <div className='video-overlay' />
            <header className='header'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-7 col-xs-4 content-wrapper result-header'>
                            <NavLink to='/'><img className='logo' src='images/black-logo.png' alt='Findious' /></NavLink>
                            <div className='wrapper-inner hidden-xs hidden-sm'> <SearchBar /></div>
                        </div>
                        <div className='col-xs-8 col-md-5 text-right'>
                            <button className='plus-btn' id='menu-trigger'><i className='fa fa-plus' /></button>
                            <OverlayBox />
                            <Weather />
                            <div className='col-xs-12 show-xs content-wrapper result-header'>
                                <div className='wrapper-inner visible-xs visible-sm'>
                                    <div className='input-group'>
                                        <input type='text' id='searchInputMobile' className='form-control' placeholder='Cafe in Montego Bay' onFocus="this.placeholder = ''" onBlur="this.placeholder = 'Coffee shop in Negril'" />
                                        <span className='input-group-btn'>
                                            <button className='btn btn-default' type='button'><i className='fa fa-search' aria-hidden='true' /></button>
                                        </span> </div>
                                    <div className='suggestion-box'>
                                        <div className='search'>
                                            <h4>Search suggestions</h4>
                                            <ul>
                                                <li><a href=''>Cafe</a></li>
                                            </ul>
                                        </div>
                                        <div className='business'>
                                            <h4>Business suggestions</h4>
                                            <ul>
                                                <li><a href=''>K's Cafe</a></li>
                                                <li><a href=''>Bookwiz Bookstore & Cafe</a></li>
                                                <li><a href=''>Sinclair Computer Cafe, Electronics and Accessories</a></li>
                                                <li><a href=''>Natural Gloves Tour & Internet Cafe</a></li>
                                                <li><a href=''>Rituals Coffe House </a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section id='about' className='about-section clearfix'>
                <div className='col-sm-6 user-video-wrapper hidden-xs' style={{ backgroundImage: 'url(images/video-back.jpg)' }}>
                    <button className='play-btn' id='trigger-overlay' ><i className='fa fa-play' /></button>
                    <div className='overlay style overlay-hugeinc' data-video='VqCjpIADs4Y'>
                        <button type='button' className='video-container--close' />
                    </div>
                </div>
                <div className='col-sm-6 page-navigation'>
                    <button className='btn close-btn overlay-close' />
                    <h1>Alexander<br />
        cafe</h1>
                    <div className='dotstyle dotstyle-tooltip'>
                        <ul>
                            <li className='current' id='about-link'><a href='#about'>Home</a></li>
                            <li id='whoWeAre-link'><a href='#whoWeAre'>About</a></li>
                            <li id='insights-link'><a href='#insights'>Insights</a></li>
                            <li id='gallery-link'><a href='#gallery'>Gallry</a></li>
                            <li id='testimonials-link'><a href='#testimonials'>Reviews</a></li>
                            <li id='contact-link'><a href='#contact'>Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className='col-sm-6 user-video-wrapper visible-xs' style={{ backgroundImage: ' url(images/video-back.jpg)' }}>
                    <button className='play-btn' id='trigger-overlay-mobile' ><i className='fa fa-play' /></button>
                    <div className='overlay style overlay-hugeinc'>
                        <button type='button' className='video-container--close' />
                    </div>
                </div>
            </section>
            <section id='whoWeAre' className='who_we_are clearfix' >
                <div className='col-sm-5 red-bg'>
                    <h2>Who We Are</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco </p>
                </div>
                <div className='col-sm-7'>
                    <img className='visible-md visible-lg' src='images/coffee-cup.png'  alt='' />
                    <img className='visible-sm visible-xs' src='images/cup_03.png' alt='description' />
                </div>
            </section>
            <section className='animation-section clearfix' id='insights'>
                <h2>Quich Insights</h2>

                <Insight
                    order='big-circle first'
                    amount='12'
                    title='Years in Business'
                />

                <Insight
                    order='big-circle second'
                    amount='20000'
                    title='Customers a year'
                />

                <Insight
                    order='big-circle third'
                    amount='10'
                    title='Social Followers'
                />

            </section>
            <Gallery
                image1='images/image1.jpg'
                alt1='desc 1'
                image2='images/image2.jpg'
                alt2='desc 2'
                image3='images/image3.jpg'
                alt3='desc 3'
            />

            <section id='testimonials' className='review-section'> <i className='fa fa-quote-right' aria-hidden='true' />
                <div className='cycle-gallery'>
                    <div className='mask'>
                        <div className='slideset'>
                            {_.times(3, i =>
                                <Testimonal
                                    quote='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna '
                                    name='Sam Smith'
                                    info='Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do'
                                    key={i}
                                />
                            )}

                        </div>
                    </div>
                    <div className='pagination' />
                </div>
            </section>

            <Contacts
                mapUrl='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3788.4903015883106!2d-78.34839848473636!3d18.279172781282224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ed90d078e3f2f6f%3A0x65fdd780f454363f!2sNorman+Manley+Blvd%2C+Negril%2C+Jamaica!5e0!3m2!1sen!2s!4v1501071099304'
                imageUrl='images/contact.jpg'
                companyName='Business name'
                address=' 452 Norma Blvd. Nrgril'
                phone='897-432-9022'
                email='mail@site.com'
                timeOpen='Open 8 am - 5 pm'
                siteUrl='www.findious.com'
                companyImgUrl='images/store-image.jpg'
            />

        </div>
    </div>
);

export { Landing };