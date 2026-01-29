import React from 'react';
import Categories from '../../commponrnts/Categories/Categories';
import ProductsSection from '../Products/ProductsSection';
import HeroHome from '../../commponrnts/Hero/HeroHome'
import SectionOneHome from '../../commponrnts/subSection/SectionOneHome';
import SectionTwoHome from '../../commponrnts/subSection/SectionTwoHome';
import Section3Home from '../../commponrnts/subSection/section3Home';
import Section4Home from '../../commponrnts/subSection/Section4Home';

const Home = () => {
    return (
        <>
        
            <HeroHome/>
            <SectionOneHome/>
            <SectionTwoHome/>
            <ProductsSection/>
            <Categories/>
            <ProductsSection/>
            <Section3Home/>
            <Section4Home/>
        </>
    );
}

export default Home;
