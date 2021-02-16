import React from 'react';
import Footer from '../Footer/Footer';
import AboutCourse from './AboutCourse/AboutCourse';
import Categories from './Categories/Categories';
import Gallery from './Gallery/Gallery'
import Header from './Header/Header';
import News from './News/News';
import PopularCourse from './PopularCourse/PopularCourse';

const Home = () => {
    return (
        <>
            <Header />
            <AboutCourse />
            <PopularCourse />
            <Categories />
            <News />
            <Gallery />
            <Footer />
        </>
    );
};


export default Home;