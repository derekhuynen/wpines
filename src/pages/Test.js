import '../css/Test.css';
import Photo from '../CabinPhotos/GoldRush720/GoldRush720-1.JPG';
import React from "react";
import Map from '../components/Map'
import Rating from '@material-ui/lab/Rating';


export default function Test() {


    return (


        <div className={'container'}>

            <div className={'left'}>
                <div className={'row'}>
                    <img src={Photo} alt="#1 Gold Rush Cabin Big Bear."/>
                    <div className={'rowInfo'}>
                        <div className={'infoTop'}>
                            <h2>Title Here</h2>
                            <div className={'rating'}>
                                <Rating name="half-rating-read" defaultValue={3} precision={0.5} readOnly
                                        display={'inline'}/>
                                <h5>(36)</h5>
                            </div>
                        </div>

                        <h4>Number: (714) 333-6783</h4>
                        <h4>Email: Derek.huynen@gmail.com</h4>
                        <p><h4>Description:</h4> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet
                            assumenda culpa
                            minus nobis odit officia quidem quisquam sequi voluptate?
                        </p>
                    </div>
                </div>
                <div className={'row'}>
                    <img src={Photo} alt="#2 Gold Rush Cabin Big Bear."/>
                    <div className={'rowInfo'}>
                        <div className={'infoTop'}>
                            <h2>Title Here</h2>
                            <div className={'rating'}>
                                <Rating name="half-rating-read" defaultValue={4.50} precision={0.5} readOnly
                                        display={'inline'}/>
                                <h5>(36)</h5>
                            </div>
                        </div>
                        <h4>Number: (714) 333-6783</h4>
                        <h4>Email: Derek.huynen@gmail.com</h4>
                        <p><h4>Description:</h4> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet
                            assumenda culpa
                            minus nobis odit officia quidem quisquam sequi voluptate?
                        </p>
                    </div>
                </div>
                <div className={'row'}>
                    <img src={Photo} alt="#3 Gold Rush Cabin Big Bear."/>
                    <div className={'rowInfo'}>
                        <div className={'infoTop'}>
                            <h2>Title Here</h2>
                            <div className={'rating'}>
                                <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly
                                        display={'inline'}/>
                                <h5>(36)</h5>
                            </div>
                        </div>
                        <h4>Number: (714) 333-6783</h4>
                        <h4>Email: Derek.huynen@gmail.com</h4>
                        <p><h4>Description:</h4> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet
                            assumenda culpa
                            minus nobis odit officia quidem quisquam sequi voluptate?
                        </p>
                    </div>
                </div>
                <div className={'row'}>
                    <img src={Photo} alt="#4 Gold Rush Cabin Big Bear."/>
                    <div className={'rowInfo'}>
                        <div className={'infoTop'}>
                            <h2>Title Here</h2>
                            <div className={'rating'}>
                                <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly
                                        display={'inline'}/>
                                <h5>(36)</h5>
                            </div>
                        </div>
                        <h4>Number: (714) 333-6783</h4>
                        <h4>Email: Derek.huynen@gmail.com</h4>
                        <p><h4>Description:</h4> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet
                            assumenda culpa
                            minus nobis odit officia quidem quisquam sequi voluptate?
                        </p>
                    </div>
                </div>
                <div className={'row'}>
                    <img src={Photo} alt="#5 Gold Rush Cabin Big Bear."/>
                    <div className={'rowInfo'}>
                        <div className={'infoTop'}>
                            <h2>Title Here</h2>
                            <div className={'rating'}>
                                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly
                                        display={'inline'}/>
                                <h5>(36)</h5>
                            </div>
                        </div>
                        <h4>Number: (714) 333-6783</h4>
                        <h4>Email: Derek.huynen@gmail.com</h4>
                        <p><h4>Description:</h4> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet
                            assumenda culpa
                            minus nobis odit officia quidem quisquam sequi voluptate?
                        </p>
                    </div>
                </div>
                <div className={'row'}>
                    <img src={Photo} alt="#6 Gold Rush Cabin Big Bear."/>
                    <div className={'rowInfo'}>
                        <div className={'infoTop'}>
                            <h2>Title Here</h2>
                            <div className={'rating'}>
                                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly
                                        display={'inline'}/>
                                <h5>(36)</h5>
                            </div>
                        </div>
                        <h4>Number: (714) 333-6783</h4>
                        <h4>Email: Derek.huynen@gmail.com</h4>
                        <p><h4>Description:</h4> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet
                            assumenda culpa
                            minus nobis odit officia quidem quisquam sequi voluptate?
                        </p>
                    </div>
                </div>
            </div>

            <div className={'right'}>
                <Map/>
            </div>
        </div>

    )

}