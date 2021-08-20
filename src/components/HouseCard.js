import React from 'react';
import '../css/HouseCard.css'
import { Icon } from "@iconify/react";
import starFilled from '@iconify/icons-ant-design/star-filled';


function HouseCard(props) {

    const cabin = props.cabin

    function openLink(){
        window.open(cabin.link)
    }

    return (
        <div id={props.index} key={props.index} className='houseCard' onClick={openLink}>

            <img src={cabin.image1} alt={cabin.title}/>
            <div className="houseCard__info">
                <h2>{cabin.title}</h2>
                <div className={'houseCard__guest__info'}>
                    <h4><span>Guests: {cabin.guests}</span></h4>
                    <h4><span>Bedrooms: {cabin.bedrooms}</span></h4>
                    <h4><span>Bathrooms: {cabin.bathrooms}</span></h4>
                </div>
                <div className={'houseCard__price'}>
                    <h2 style={{float: 'left'}}><Icon icon = {starFilled} color="#e61e4d" width="18" height="18" inline={true}/></h2>
                    <h3 style={{float: 'left'}}>{cabin.rating} </h3>
                    <h3 className={"gray"} style={{float: 'left'}}>({cabin.reviews})</h3>
                    <h4 style={{float: 'right'}}>{cabin.license}</h4>
                </div>
            </div>
        </div>
    )
}

export default HouseCard