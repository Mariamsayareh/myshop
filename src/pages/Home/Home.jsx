import React from 'react';
import Categories from '../../commponrnts/Categories/Categories';
import ProductsSection from '../Products/ProductsSection';
import HeroHome from '../../commponrnts/Hero/HeroHome'

const Home = () => {
    return (
        <>
        <HeroHome/>
            <Categories/>
            <ProductsSection/>
        </>
    );
}

export default Home;
