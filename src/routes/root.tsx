import React from 'react';
import {Outlet} from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

import classes from './root.module.css'

const Root = () => {

    return (
        <div className={classes.root}>
            <Sidebar />
            <div id='detail'>
                <Outlet/>
            </div>
        </div>
    );
};

export default Root;