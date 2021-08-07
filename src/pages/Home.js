import React from 'react';
import '../css/Home.css';
import Banner from '../components/Banner'
import HouseCard from '../components/HouseCard'
import Card from '../components/Card'
import PapaBear720_1 from '../CabinPhotos/PapaBear720/PapaBear720-1.JPG'
import PapaBear720_2 from '../CabinPhotos/PapaBear720/PapaBear720-2.JPG'

import Scandia720_1 from '../CabinPhotos/Scandia720/Scandia720-1.JPG'
import Scandia720_2 from '../CabinPhotos/Scandia720/Scandia720-2.JPG'

import TreeHutte720_1 from '../CabinPhotos/TreeHutte720/TreeHutte720-24.JPG'
import TreeHutte720_2 from '../CabinPhotos/TreeHutte720/TreeHutte720-2.JPG'

import WhisperingPines720_1 from '../CabinPhotos/WhsiperingPines720/WhisperingPines720-1.JPG'
import WhisperingPines720_2 from '../CabinPhotos/WhsiperingPines720/WhisperingPines720-2.JPG'

import GoldRush720_1 from '../CabinPhotos/GoldRush720/GoldRush720-1.JPG'
import GoldRush720_2 from '../CabinPhotos/GoldRush720/GoldRush720-2.JPG'

import Hiking720 from '../CabinPhotos/City720/City720-1.JPG'
import Village720 from '../CabinPhotos/City720/City720-2.JPG'


function Home() {
    return (
        <div className='home'>
            <Banner/>

            <div className='home__section'>
                <Card
                    image1={GoldRush720_1}
                    title="All Cabins"
                />
                <Card
                    image1= {Hiking720}
                    title="Things To Do"
                />
                <Card
                    image1={Village720}
                    title="Restaurants"
                />
            </div>
            <div className='home__section'>
                <HouseCard
                    image1={WhisperingPines720_1}
                    image2={WhisperingPines720_2}
                    title="Whispering Pines"
                    guests= "4"
                    bedrooms= "2"
                    bathrooms= "2"
                    license="2021-1234"
                    link="https://airbnb.com/h/whispheringpines"

                />
                <HouseCard
                    image1={Scandia720_1}
                    image2={Scandia720_2}
                    title="Scandia Chalet"
                    guests= "10"
                    bedrooms= "3"
                    bathrooms= "2.5"
                    license="2021-1234"
                    link="https://airbnb.com/h/chaletscandia"
                />
                <HouseCard
                    image1={PapaBear720_1}
                    image2={PapaBear720_2}
                    title="Papa Bear Cabin"
                    guests= "5"
                    bedrooms= "2"
                    bathrooms= "2"
                    license="2021-1234"
                    link="https://airbnb.com/h/papabearcabin"
                />
                <HouseCard
                    image1={TreeHutte720_1}
                    image2={TreeHutte720_2}
                    title="Tree Hütte"
                    guests= "5"
                    bedrooms= "3"
                    bathrooms= "1"
                    license="2021-1234"
                    link="https://airbnb.com/h/treehutte"
                />
                <HouseCard
                    image1={GoldRush720_1}
                    image2={GoldRush720_2}
                    title="Gold Rush Cabin"
                    guests= "14"
                    bedrooms= "3"
                    bathrooms= "2.5"
                    license="2021-1234"
                    link="https://airbnb.com/h/treehutte"
                />
            </div>
        </div>
    )
}

export default Home