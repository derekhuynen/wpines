import '../css/Test.css';
import React from "react";
import Map from '../components/Map'
import {cabins} from '../JSON/cabins.js'





function openLink(link) {
    window.open(link)
}

const items = cabins.map((cabin, index) => {

    return (
        <div className={'row'}>

            <div className={'rowInfo'}>
                <div className={'topInfo'}>

                </div>
                <div className={'bottomInfo'}>

                </div>

            </div>
        </div>
    )
})


export default function Restaurants() {

    return (


        <div className={'container'}>

            <div className={'left'}>
                {items}
            </div>

            <div className={'right'}>
                <Map/>
            </div>
        </div>

    )
}