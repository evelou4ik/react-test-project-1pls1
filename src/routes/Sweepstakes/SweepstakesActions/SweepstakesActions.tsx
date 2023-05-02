import React from 'react';
import SweepstakesFilters from "../SweepstakesFilters/SweepstakesFilters";
import SweepstakesPerPage from "./SweepstakesPerPage";

import classes from './SweepstakesActions.module.css'

const SweepstakesActions = () => {
    return (
        <div className={classes['table-top']}>
            <SweepstakesFilters/>
            <SweepstakesPerPage/>
        </div>
    );
};

export default SweepstakesActions;