import React from 'react'
import '../../App.scss';
import IntroSection from '../IntroSection';
import Tile from '../Tile';
import Footer from '../Footer';

function Home() {
    return (
        <div>
            <IntroSection />
            <Tile />
            <Footer />
        </div>
    );
}

export default Home

