import React from 'react'
import bannerPic from "../CabinPhotos/BigBearBanner/Octoberfest Banner.png";
import '../css/Holiday.css'


export default function OctoberFestPage() {


    return (
        <div className={"holiday-page-container"}>
            <div className={"holiday-banner"}>
                <div className={"holiday-center"}>
                    <img src={bannerPic} alt={"OktoberFest in Big Bear 2021"}/>
                </div>
            </div>

            <div className={"holiday-content-container"}>
                <div className={"holiday-content"}>
                    <h1>Oktoberfest</h1>
                    <h2>2021 Big Bear Lake Oktoberfest</h2>

                    <p>The Big Bear Lake Oktoberfest kicks-off 50+ years of German Tradition on Saturday, Sept. 11th and
                        continues through Sunday, Nov. 7th. We’ve been told something special happens when friends and
                        family come together for a party high in the mountains, under the pines, and 50+ years in the
                        making. In these moments memories are created, life is celebrated and you swear every heart
                        beats as one!</p>

                    <p>Last year we celebrated 50 years of love and went back to our roots.! It was amazing. . . we
                        learned in difficult times celebrating with those that matter most is important.</p>

                    <p>It’s time for Oktoberfest magic, love and hope to fill our fresh mountain air. It’s time for
                        family and friends to come together to celebrate and create a memory or two. It’s time for a
                        reason to smile…</p>


                    <h3>2021 General Admission:</h3>

                    <p>The 2021 Oktoberfest will offer limited capacity. The good news is that this year we are
                        celebrating both inside and outside. And, while our favorite bands from Germany still can not
                        fly into the United States, we’ve lined up some awesome German-American bands to help us
                        celebrate this year. Rest assured we are gearing up for a Fall party like no other!</p>
                </div>
            </div>

        </div>

    )
}