import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';

const Home: NextPage = () => {
    return (
        <div className='app'>
            <Head>
                <title>2D Segment Tree Visualization</title>
            </Head>
            <Header/>
            <canvas id="mainCanvas"></canvas>
        </div>
    );
};

export default Home;
