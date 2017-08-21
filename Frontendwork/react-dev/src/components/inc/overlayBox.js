import React from 'react';

const OverlayBox = () => (
    <div id='menu-overlay' className='overlay overlay-hugeinc'>
        <button type='button' className='menu-container--close overlay-close' />
        <div className='row'>
            <div className='menu-back' style={{  backgroundImage: 'url(images/background.jpg)' }}>
                <h3>About Us</h3>
            </div>
            <div className='col-sm-6'>
                <div>
                    <ul className='nav nav-tabs' role='tablist'>
                        <li role='presentation' className='active'><a href='#signup' aria-controls='signup' role='tab' data-toggle='tab'>Signup</a></li>
                        <li role='presentation'><a href='#aboutTab' aria-controls='aboutTab' role='tab' data-toggle='tab'>About Us</a></li>
                        <li role='presentation'><a href='#contactTab' aria-controls='contactTab' role='tab' data-toggle='tab'>Contact</a></li>
                    </ul>

                    <div className='tab-content'>
                        <div role='tabpanel' className='tab-pane active' id='signup'>
                            <p> Everyday consumers want to know that your company exists <span>- GET LISTED TODAY!</span> <i className='fa fa-angle-down' aria-hidden='true' /> </p>
                            <form id='theForm' className='simform' autoComplete='off'>
                                <div className='simform-inner'>
                                    <ol className='questions'>
                                        <li> <span>
                                            <label htmlFor='q1'>What Is The Name of Your Business? </label>
                                        </span>
                                            <input id='q1' name='q1' type='text' />
                                        </li>
                                        <li> <span>
                                            <label htmlFor='q2'>Where do you live?</label>
                                        </span>
                                            <input id='q2' name='q2' type='text' />
                                        </li>
                                        <li> <span>
                                            <label htmlFor='q3'>What time do you got to work?</label>
                                        </span>
                                        <input id='q3' name='q3' type='text' />
                                        </li>
                                        <li> <span>
                                            <label htmlFor='q4'>How do you like your veggies?</label>
                                        </span>
                                            <input id='q4' name='q4' type='text' />
                                        </li>
                                        <li> <span>
                                            <label htmlFor='q5'>What book inspires you?</label>
                                        </span>
                                            <input id='q5' name='q5' type='text' />
                                        </li>
                                        <li> <span>
                                            <label htmlFor='q6'>What's your profession?</label>
                                        </span>
                                            <input id='q6' name='q6' type='text' />
                                        </li>
                                    </ol>

                                    <button className='submit' type='submit'>Send answers</button>
                                    <div className='controls'>
                                        <button className='next'><i className='fa fa-chevron-right' aria-hidden='true' /> </button>
                                        <div className='progress' />
                                        <span className='number'> <span className='number-current' /> <span className='number-total' /> </span> <span className='error-message' /> </div>

                                </div>

                                <span className='final-message' />
                            </form>

                            <button className='btn btn-continue'>Continue <i className='fa fa-angle-right' aria-hidden='true' /></button>
                        </div>
                        <div role='tabpanel' className='tab-pane' id='aboutTab'>
                            <p> Everyday consumers want to know that your company exists Everyday consumers want to know that your company exists Everyday consumers want to know that your company exists </p>
                            <p> Everyday consumers want to know that your company exists Everyday consumers want to know that your company exists Everyday consumers want to know that your company exists </p>
                        </div>
                        <div role='tabpanel' className='tab-pane' id='contactTab'>
                            <p> Feel free to contact us at any time, and learn more about our products & services. <i className='fa fa-angle-down' aria-hidden='true' /> </p>
                            <form id='theForm2' className='simform' autoComplete='off'>
                                <div className='simform-inner'>
                                    <ol className='questions'>
                                        <li> <span>
                                            <label htmlFor='q11'>Full Name</label>
                                        </span>
                                            <input id='q11' name='q11' type='text' />
                                        </li>
                                        <li> <span>
                                            <label htmlFor='q12'>Where do you live?</label>
                                        </span>
                                            <input id='q12' name='q12' type='text' />
                                        </li>
                                        <li> <span>
                                            <label htmlFor='q13'>What time do you got to work?</label>
                                        </span>
                                            <input id='q13' name='q13' type='text' />
                                        </li>
                                    </ol>

                                    <button className='submit' type='submit'>Send answers</button>
                                    <div className='controls'>
                                        <button className='next'><i className='fa fa-chevron-right' aria-hidden='true' /> </button>
                                        <div className='progress' />
                                        <span className='number'> <span className='number-current' /> <span className='number-total' /> </span> <span className='error-message' /> </div>

                                </div>

                                <span className='final-message' />
                            </form>

                            <button className='btn btn-continue'>Continue <i className='fa fa-angle-right' aria-hidden='true' /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export { OverlayBox };