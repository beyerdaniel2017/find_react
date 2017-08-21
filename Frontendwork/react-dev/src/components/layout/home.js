import React from 'react';
import { Header } from '../home/header';
import { Context } from '../home/context';

const Home = () => (
    <div className='heading-wrapper'>
        <div className='fade_background' />
        <Header />
        <Context />

    </div>

);

export { Home };