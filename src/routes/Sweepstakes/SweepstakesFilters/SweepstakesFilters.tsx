import React from 'react';
import Button from "../../../components/UI/Button/Button";

import classes from './SweepstakesFilters.module.css'

const SweepstakesFilters = () => {

    const filterTableBy = (): void => {
        console.log(2)
    }

    return (
        <div className={classes['filters-wrapper']}>
            <span>Filters:</span>
            <Button type='button' onClick={filterTableBy}>All</Button>
            <Button type='button' onClick={filterTableBy}>Active</Button>
            <Button type='button' onClick={filterTableBy}>Inactive</Button>
        </div>
    );
};

export default SweepstakesFilters;