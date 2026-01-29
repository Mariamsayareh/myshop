import React from 'react';
import Categories from '../../commponrnts/Categories/Categories';
import ProductsSection from '../Products/ProductsSection';
import HeroHome from '../../commponrnts/Hero/HeroHome'
import SectionOneHome from '../../commponrnts/subSection/SectionOneHome';

const Home = () => {
    return (
        <>
        
            <HeroHome/>
            <SectionOneHome/>
            <ProductsSection/>
            <Categories/>
            <ProductsSection/>
        </>
    );
}

export default Home;
