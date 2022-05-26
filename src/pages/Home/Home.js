import React from 'react';
import Footer from '../../shared/Footer/Footer';
import Banner from './Banner/Banner';
import ContactSection from './ContactSection/ContactSection';
import PreviewSection from './PreviewSection/PreviewSection';
import ProductsSection from './ProductsSection/ProductsSection';
import ReviewSection from './ReviewSection./ReviewSection';
import Summary from './Summary/Summary';

const Home = () => {
    return (
        <div>
            <Banner />
            <ProductsSection />
            <Summary />
            <PreviewSection />
            <ReviewSection />
            <ContactSection />
            <Footer />
        </div>
    );
};

export default Home;