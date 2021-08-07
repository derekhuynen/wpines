import React from 'react';
import '../css/Card.css'

function HouseCard({image1, title}) {

    return (
        <div className='card' >
            <img src={image1} alt=""/>
            <div className="card__info">
                <h2>{title}</h2>
            </div>
        </div>
    )
}

export default HouseCard