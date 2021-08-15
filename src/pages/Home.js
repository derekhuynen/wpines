import React from 'react';
import '../css/Home.css';
import Banner from '../components/Banner'
import HouseCard from '../components/HouseCard'
import Card from '../components/Card'

import House from '../CabinPhotos/Cabins/GoldRushSmall.JPG'
import Hiking720 from '../CabinPhotos/City720/City720-1.JPG'
import Village720 from '../CabinPhotos/City720/City720-2.JPG'

import { Icon } from '@iconify/react';
import baselineHiking from '@iconify/icons-ic/baseline-hiking';
import iRestaurant from '@iconify/icons-medical-icon/i-restaurant';
import houseDoor from '@iconify/icons-bi/house-door';

import {cabins} from '../JSON/cabins'


function Home() {


    const items = cabins.map((cabin,index) => {
        return(
            <HouseCard key={index} cabin={cabin} />
        )
    })

    return (
        <div className='home'>
            <Banner/>

            <div className='home__section'>
                <Card
                    image1={House}
                    title="All Cabins"
                    link= "/cabins"
                    icon={<Icon icon={houseDoor} width="20" height="20" inline={true}/>}
                />
                <Card
                    image1= {Village720}
                    title="Things To Do"
                    icon={<Icon icon={baselineHiking} width="20" height="20" inline={true}/>}
                />
                <Card
                    image1={Hiking720}
                    title="Restaurants"
                    link= "/restaurants"
                    icon={<Icon icon={iRestaurant} width="20" height="20" inline={true}/>}
                />
            </div>
            <div className='home__section'>
                {items}
            </div>
        </div>
    )
}

export default Home