import React from 'react';
import '../css/Card.css'

function HouseCard({image1, title, icon}) {

    return (
        <div className='card' >
            <img src={image1} alt=""/>
            <div className="card__info">
                <div className={'card__title'}>
                    <h2 style={{float: 'left'}}>{title}</h2>
                    <h2 style={{float: 'right'}}>{icon}</h2>
                </div>
            </div>
        </div>
    )
}

export default HouseCard