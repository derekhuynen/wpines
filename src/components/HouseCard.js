import React from 'react';
import '../css/Card.css'
import { Icon } from "@iconify/react";
import starFilled from '@iconify/icons-ant-design/star-filled';


function HouseCard({image1, image2, title, guests, bedrooms, bathrooms , license, link}) {

    function openLink(){
        window.open(link)
    }

    return (
        <div className='card' onClick={openLink}>
            <img src={image1} alt=""/>
            <div className="card__info">
                <h2>{title}</h2>
                <div className={'guest__info'}>
                    <h4><span>Guests: {guests}</span></h4>
                    <h4><span>Bedrooms: {bedrooms}</span></h4>
                    <h4><span>Bathrooms: {bathrooms}</span></h4>
                </div>
                <div className={'price'}>
                    <h3 style={{float: 'left'}}><Icon icon = {starFilled} color="#e61e4d" width="18" height="18" inline={true}/>4.93 (73)</h3>
                    <h4 style={{float: 'right'}}>License: {license}</h4>
                </div>
            </div>
        </div>
    )
}

export default HouseCard