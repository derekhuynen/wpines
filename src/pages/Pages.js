import '../css/Test.css';
import React from "react";
import Map from '../components/Map'
import Cabin from '../components/Cabin'
import Restaurant from '../components/Restaurant'
import Banner from '../components/Banner'

import {Route, Switch, useRouteMatch} from "react-router-dom";


export default function Pages() {

    let {path} = useRouteMatch();

    return (


            <div className={'container'}>

                <div className={'right'}>
                    <Map/>
                </div>

                <div className={'left'}>
                    <Switch>
                        <Route path={`${path}/cabins`}>
                            <Cabin/>
                        </Route>
                        <Route path={`${path}/restaurants`}>
                            <Restaurant/>
                        </Route>
                    </Switch>
                </div>

            </div>

    )
}