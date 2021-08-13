import React from 'react';
import '../css/Home.css';
import Banner from '../components/Banner'
import HouseCard from '../components/HouseCard'
import Card from '../components/Card'
import PapaBear720_1 from '../CabinPhotos/PapaBear720/PapaBear720-1.JPG'

import Scandia720_1 from '../CabinPhotos/Scandia720/Scandia720-1.JPG'

import TreeHutte720_1 from '../CabinPhotos/TreeHutte720/TreeHutte720-24.JPG'

import WhisperingPines720_1 from '../CabinPhotos/WhsiperingPines720/WhisperingPines720-1.JPG'

import GoldRush720_1 from '../CabinPhotos/GoldRush720/GoldRush720-1.JPG'

import Hiking720 from '../CabinPhotos/City720/City720-1.JPG'
import Village720 from '../CabinPhotos/City720/City720-2.JPG'

import { Icon } from '@iconify/react';
import calendarEvent from '@iconify/icons-bi/calendar-event';
import baselineHiking from '@iconify/icons-ic/baseline-hiking';
import iRestaurant from '@iconify/icons-medical-icon/i-restaurant';
import houseDoor from '@iconify/icons-bi/house-door';


function Home() {


    return (
        <div className='home'>
            <Banner/>

            <div className='home__section'>
                <Card
                    image1={GoldRush720_1}
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
                <HouseCard
                    image1={WhisperingPines720_1}
                    title="Whispering Pines"
                    guests= "4"
                    bedrooms= "2"
                    bathrooms= "2"
                    license="2021-1234"
                    link="https://airbnb.com/h/whispheringpines"
                    rating="4.92 (73 reviews)"
                />
                <HouseCard
                    image1={Scandia720_1}
                    title="Scandia Chalet"
                    guests= "10"
                    bedrooms= "3"
                    bathrooms= "2.5"
                    license="2021-1234"
                    link="https://airbnb.com/h/chaletscandia"
                    rating="4.75 (4 reviews)"
                />
                <HouseCard
                    image1={PapaBear720_1}
                    title="Papa Bear Cabin"
                    guests= "5"
                    bedrooms= "2"
                    bathrooms= "2"
                    license="2021-0078"
                    link="https://airbnb.com/h/papabearcabin"
                    rating="5.00 (2 reviews)"
                />
                <HouseCard
                    image1={TreeHutte720_1}
                    title="Tree Hütte"
                    guests= "5"
                    bedrooms= "3"
                    bathrooms= "1"
                    license="2021-1234"
                    link="https://airbnb.com/h/treehutte"
                    rating="4.88 (8 reviews)"
                />
                <HouseCard
                    image1={GoldRush720_1}
                    title="Gold Rush Lodge"
                    guests= "14"
                    bedrooms= "3"
                    bathrooms= "2.5"
                    license="2020-0381"
                    link="https://abnb.me/i2RouaAyzib"/>
            </div>
        </div>
    )
}

export default Home