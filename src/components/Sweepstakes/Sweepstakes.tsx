import React from 'react';

import SweepstakesActions from './SweepstakesActions/SweepstakesActions';
import SweepstakesTable from './SweepstakesTable/SweepstakesTable';
import TabWrapper from '../UI/TabWrapper/TabWrapper';

const Sweepstakes = () => {
  return (
    <TabWrapper>
      <h2>Sweepstakes</h2>
      <div>
        <SweepstakesActions />
        <SweepstakesTable />
      </div>
    </TabWrapper>
  );
};

export default Sweepstakes;
