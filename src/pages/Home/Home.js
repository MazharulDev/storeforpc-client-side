import React from 'react';
import Footer from '../../shared/Footer/Footer';
import Banner from './Banner/Banner';
import ProductsSection from './ProductsSection/ProductsSection';
import Summary from './Summary/Summary';

const Home = () => {
    return (
        <div>
            <Banner/>
            <ProductsSection/>
            <Summary/>
            <Footer/>
        </div>
    );
};

export default Home;