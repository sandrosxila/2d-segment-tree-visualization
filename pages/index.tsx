import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import ArrayFillForm from '../components/ArrayFillForm';
import Header from '../components/Header';

const Home: NextPage = () => {

    const [showFillForm, setShowFillForm] = useState(true);

    return (
        <div className='app'>
            <Head>
                <title>2D Segment Tree Visualization</title>
            </Head>
            <Header setShowFillForm={ setShowFillForm }/>
            <ArrayFillForm active={ showFillForm } setActive={ setShowFillForm }/>
            <canvas id="mainCanvas"></canvas>
        </div>
    );
};

export default Home;
