import React from 'react';
import { Link } from 'react-router-dom';

function TileItem(props) {
    return (
        <li className='tile__item'>
            <Link className='tile__item__link' to={props.path}>
                <figure className='tile__item__pic-wrap' data-category={props.label} >
                    <img src={props.src} alt={props.alt} className='tile__item__img'/>
                </figure>
                <div className='tile__item__info'>
                    <h5 className='tile__item__text'>{props.text}</h5>
                </div>
            </Link>
        </li>
    );
}

export default TileItem
