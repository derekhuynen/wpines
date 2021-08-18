import '../css/Test.css';
import React from "react";
import Map from '../components/Map'
import {businesses} from '../JSON/businesses.js'
import {yelp} from "../JSON/yelp";




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
            openLink(activity.link)
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

const center =  {
    lat: 34.23917082635063,
    lng: -116.9122004384206
}
export default function Activities() {

    return (

        <>
            <div className={'container'}>
                <div className={'left'}>
                    {items}
                </div>

                <div className={'right'}>
                    <Map items={businesses} zoom={14} center={center} comp={"activities"}/>
                </div>
            </div>
        </>
    )
}