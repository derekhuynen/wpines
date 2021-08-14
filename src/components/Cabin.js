import {cabins} from "../JSON/cabins";
import {Icon} from "@iconify/react";
import starFilled from "@iconify/icons-ant-design/star-filled";
import React from "react";

function trimString(str) {


    if (str.length > 350) {
        return str.substring(0, str.indexOf(" ", 350)) + "...";
    } else {
        return str
    }
}

function items2(amenities) {

    return (
        <div className={"amenities"}>
            {amenities.map((amenity, index) => {
                return (
                    <div key={index} id={index} className={"amenity"}>
                        <h4>{amenity}</h4>
                    </div>
                )
            })}
        </div>
    )
}

function openLink(link) {
    window.open(link)
}

const items = cabins.map((cabin, index) => {

    return (
        <div key={cabin.title} id={cabin.title} className={'row'} onClick={() => {
            openLink(cabin.link)
        }}>
            <div className={""}>

            </div>
            <img src={cabin.image1} alt="Gold Rush Cabin Big Bear."/>
            <div className={'rowInfo'}>
                <div className={'infoTop'}>
                    <h2>{cabin.title}</h2>
                    <div className={'rating'}>
                        <Icon icon={starFilled} color="#e61e4d" width="18" height="18" inline={true}/>
                        <h5 className={"gray"}>({cabin.reviews} reviews)</h5>
                        <h5>{cabin.rating}</h5>
                    </div>
                </div>
                <div className={'houseInfo'}>
                    <h4><span>Guests: {cabin.guests}</span></h4>
                    <h4><span>Bedrooms: {cabin.bedrooms}</span></h4>
                    <h4><span>Beds: {cabin.beds}</span></h4>
                    <h4><span>Bathrooms: {cabin.bathrooms}</span></h4>
                </div>
                {items2(cabin.amenities)}
                <div className={"houseDescription"}>
                    <p>{trimString(cabin.description)}</p>
                </div>
                <h4 className={"license"}>License: {cabin.license}</h4>
            </div>
        </div>
    )
})

export default function Cabin() {
    return (
        <>
            {items}
        </>
    )}