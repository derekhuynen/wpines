import '../css/Test.css';
import React from "react";
import Map from '../components/Map'
import {yelp} from '../JSON/yelp.js'
import StarRatings from 'react-star-ratings';
import {Element} from "react-scroll";


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
        <div className={'restaurant'} onClick={() => {
            openLink(restaurant.url)
        }}>
            <div className={"restaurantImage"}>
                <img className={"restaurantImg "} src={restaurant.image_url} alt="Restaurant in Big Bear"/>
            </div>

            <div className={'restaurantInfo'}>
                <div className={'restaurantTop'}>
                    <h2>{restaurant.name}</h2>
                    <h4 className={"price"}>{restaurant.price}</h4>
                </div>

                <div className={"restaurantBottom"}>
                    <div className={"restaurantRating"}>
                        <StarRatings
                            rating={restaurant.rating}
                            starRatedColor="#FF385C"
                            numberOfStars={5}
                            name='rating'
                            starDimension={17}
                            starSpacing={3}
                            starEmptyColor={"gray"}
                        />
                        <h5 className={"gray"}>({restaurant.review_count} reviews)</h5>
                    </div>

                    {items2(restaurant.categories)}
                    <h4>{restaurant.location.display_address.toString()}</h4>
                    <h4>{restaurant.display_phone}</h4>
                </div>

            </div>
        </div>
    )
})

const center =  {
    lat: 34.212527537480895,
    lng: -116.90836774720256
}

export default function Test() {

    return (


        <div className={'container'}>
                    <div className={'left'}>
                        {items}
                    </div>
            <div className={'right'}>
                <Map items={yelp} zoom={16} center={center} comp={"restaurant"}/>
            </div>
        </div>

    )

}