import React from 'react';
import TileItem from './TileItem';
import './Tile.scss';

function Tile() {
    return (
        <div className='tile'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className='tile__container'>
                <div className='tile__wrapper'>

                    <ul className='tile__items'>
                        <TileItem 
                            src={process.env.PUBLIC_URL + '/images/tokyo.png'} 
                            text='Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples.'
                            label='Tokyo'
                            path='/services' 
                            alt='Tokyo City Skyline'
                        />
                        <TileItem 
                            src={process.env.PUBLIC_URL + '/images/new-york.png'} 
                            text='New York City (NYC), often simply called New York, is the most populous city in the United States.'
                            label='New York'
                            path='/services' 
                            alt='Empire State Building located in New York City'
                        />
                    </ul>
                    <ul className='tile__items'>
                        <TileItem 
                            src={process.env.PUBLIC_URL + '/images/paris.png'} 
                            text='Paris, France capital, is a major European city and a global center for art, fashion, gastronomy and culture.'
                            label='Paris'
                            path='/services'
                            alt='Eiffel Tower located in Paris City' 
                        />
                        <TileItem 
                            src={process.env.PUBLIC_URL + '/images/london.png'} 
                            text='London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times.'
                            label='London'
                            path='/services'
                            alt='London Bridge'
                        />
                        <TileItem 
                            src={process.env.PUBLIC_URL + '/images/rome.png'}
                            text='Rome is the capital city and a special comune of Italy, as well as the capital of the Lazio region.'
                            label='Rome'
                            path='/services'
                            alt='Colosseum in Rome City'
                        />
                    </ul>
                    <ul className='tile__items'>
                        <TileItem 
                            src={process.env.PUBLIC_URL + '/images/berlin.png'} 
                            text='Berlin is the capital and largest city of Germany by both area and population.'
                            label='Berlin'
                            path='/services'
                            alt='Brandenburg Gate located in Berlin City' 
                        />
                        <TileItem 
                            src={process.env.PUBLIC_URL + '/images/toronto.png'} 
                            text='Toronto, the capital of the province of Ontario, is a major Canadian city along Lake Ontario’s northwestern shore.'
                            label='Toronto'
                            path='/services' 
                            alt='Toronto City Skyline'
                        />
                        <TileItem 
                            src={process.env.PUBLIC_URL + '/images/madrid.png'} 
                            text='Madrid, Spain central capital, is a city of elegant boulevards and expansive, manicured parks such as the Buen Retiro'
                            label='Madrid'
                            path='/services' 
                            alt='Metropolis Building in Madrid City'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Tile
