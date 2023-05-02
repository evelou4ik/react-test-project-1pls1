import React from 'react';
import SweepstakesActions from "./SweepstakesActions/SweepstakesActions";
import SweepstakesTable from "./SweepstakesTable/SweepstakesTable";

const Sweepstakes = () => {
    return (
        <React.Fragment>
            <h2>Sweepstakes</h2>
            <div>
                <SweepstakesActions/>
                <SweepstakesTable/>
            </div>
        </React.Fragment>
    );
};

export default Sweepstakes;