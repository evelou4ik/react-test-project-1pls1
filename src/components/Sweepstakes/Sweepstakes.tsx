import React from 'react';

import SweepstakesActions from './SweepstakesActions/SweepstakesActions';
import SweepstakesTable from './SweepstakesTable/SweepstakesTable';
import TabWrapper from '../UI/TabWrapper/TabWrapper';
import { useAppSelector } from '../hooks/hooks';
import { getTypefaceFromTypographiesOrDefault } from '../helpers/helpers';

const Sweepstakes = () => {
  const { usedTypefaces } = useAppSelector((state) => state.settings);

  return (
    <TabWrapper>
      <h2
        style={{
          fontFamily: getTypefaceFromTypographiesOrDefault(
            usedTypefaces,
            usedTypefaces?.headerFont ?? 'inherit'
          )
        }}>
        Sweepstakes
      </h2>
      <div>
        <SweepstakesActions />
        <SweepstakesTable />
      </div>
    </TabWrapper>
  );
};

export default Sweepstakes;
