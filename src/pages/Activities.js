import '../css/Test.css';
import React from "react";
import Map from '../components/Map'
import {businesses} from '../JSON/businesses.js'




function items2(topics) {

    return (
        <div className={"amenities"}>
            {topics.map((topic, index) => {
                return (
                    <div key={index} id={index} className={"amenity"}>
                        <h4>{topic}</h4>
                    </div>
                )
            })}
        </div>
    )
}

function openLink(link) {
    window.open(link)
}

const items = businesses.map((activity, index) => {

    return (
        <div key={index} className={'restaurant'} onClick={() => {
            openLink(activity.url)
        }}>
            <div className={"restaurantImage"}>
                <img className={"restaurantImg "} src={activity.image1} alt="Restaurant in Big Bear"/>
            </div>

            <div className={'restaurantInfo'}>
                <div className={'restaurantTop'}>
                    <h2>{activity.title}</h2>
                </div>

                <div className={"restaurantBottom"}>

                    {items2(activity.topics)}
                    <h4>{activity.address.toString()}</h4>
                    <h4>{activity.number}</h4>
                </div>

            </div>
        </div>
    )
})

const center = {
    lat: 34.24651450381265,
    lng: -116.86896456863401
}

export default function Activities() {

    return (

        <>
            <div className={'container'}>
                <div className={'left'}>
                    {items}
                </div>

                <div className={'right'}>

                </div>
            </div>
        </>
    )
}