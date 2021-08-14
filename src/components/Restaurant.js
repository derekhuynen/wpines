import '../css/Test.css';
import React from "react";
import Map from '../components/Map'
import {yelp} from '../JSON/yelp.js'
import {Icon} from "@iconify/react";
import starFilled from "@iconify/icons-ant-design/star-filled";


function items2(categories) {

    return (
        <div className={"amenities"}>
            {categories.map((category, index) => {
                return (
                    <div key={index} id={index} className={"amenity"}>
                        <h4>{category.title}</h4>
                    </div>
                )
            })}
        </div>
    )
}

function openLink(link) {
    window.open(link)
}

const items = yelp.map((restaurant, index) => {

    return (
        <div className={'row'} onClick={() => {
            openLink(restaurant.url)
        }}>
            <div className={"imageDiv"}><img className={"restaurantImg "} src={restaurant.image_url} alt="Restaurant in Big Bear"/></div>

            <div className={'rowInfo'}>
                <div className={'infoTop'}>
                    <h2>{restaurant.name}</h2>
                    <h4>{restaurant.price}</h4>
                    <div className={'rating'}>
                        <Icon icon = {starFilled} color="#e61e4d" width="18" height="18" inline={true}/>
                        <h5 className={"gray"}>({restaurant.review_count} reviews)</h5>
                        <h5>{restaurant.rating}</h5>
                    </div>
                </div>
                {items2(restaurant.categories)}
                <h4>{restaurant.location.display_address.toString()}</h4>
                <h4>{restaurant.display_phone}</h4>
            </div>
        </div>
    )
})


export default function Restaurant() {
    return (
        <>
            {items}
        </>
    )}