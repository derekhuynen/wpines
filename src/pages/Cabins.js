import '../css/Test.css';
import React, {useState} from "react";
import Map from '../components/Map'
import {cabins} from '../JSON/cabins.js'
import {Icon} from "@iconify/react";
import starFilled from "@iconify/icons-ant-design/star-filled";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {filterTopic} from "../components/filter";


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

const items = (data) => {
    return data.map((cabin, index) => {

        return (
            <div key={cabin.title} id={cabin.title} className={'cabin'} onClick={() => {
                openLink(cabin.link)
            }}>

                <div className={"cabinImage"}>
                    <img src={cabin.image1} alt="Gold Rush Cabin Big Bear."/>
                </div>


                <div className={'cabinInfo'}>
                    <div className={'cabinTop'}>
                        <h2>{cabin.title}</h2>
                        <div className={'houseRating'}>
                            <Icon icon={starFilled} color="#e61e4d" width="18" height="18" inline={true}/>
                            <h5 className={"gray"}>({cabin.reviews} reviews)</h5>
                            <h5>{cabin.rating}</h5>
                        </div>
                    </div>
                    <div className={'cabinBedInfo'}>
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
    });
}

const center = {
    lat: 34.24651450381265,
    lng: -116.86896456863401
}

export default function Cabins() {
    const [displayData, setDisplayData] = useState(cabins);
    const [target, setTarget] = useState("All");
    const [search, setSearch] = useState("");
    const headers = ["title","guests","bedrooms","bathrooms","beds","amenities"]
    const topics = ["All", "bedrooms", "bathrooms", "beds", "guests"]
    const defaultOption = topics[0];


    const idk = (temp)=>  {
        if(temp.toString() === "All"){
            return headers;
        }else{
            return temp.toString();
        }
    }


    const handleChange = (option) => {
        setTarget(option.value)
        setDisplayData(filterTopic(cabins,idk(option.value), search))
    }


    return (
        <>
            <div className={'container'}>
                <div className={'left'}>
                    <div className={"searchContainer"}>
                        <div className={"search"}>
                            <h4>Search</h4>
                            <input
                                onChange={(e) => {
                                    setSearch(e.target.value)
                                    setDisplayData(filterTopic(cabins,idk(target), search))
                                }}
                                placeholder={""}
                            />
                        </div>
                        <div className={"dropboxDiv"}>
                            <Dropdown options={topics} onChange={handleChange} value={defaultOption}
                                      placeholder="Select an option"/>
                        </div>
                    </div>
                    {items(displayData)}
                </div>
                <div className={'right'}>
                    <Map center={center} items={cabins} comp={"cabin"}/>
                </div>
            </div>
        </>
    )
}