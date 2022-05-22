import React from 'react';
import Footer from '../../shared/Footer/Footer';
import Banner from './Banner/Banner';
import Summary from './Summary/Summary';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Summary/>
            <Footer/>
        </div>
    );
};

export default Home;