import React, { useEffect } from 'react';
import uuid from 'react-uuid';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { SweepstakeInterface } from '../../types/types';

import { fetchSweepstakes, selectAllSweepstakes } from '../../store/sweepstakesSlice';

const correctFormatOfDate = (dt: string) => {
  const date = new Date(Number(dt));

  const formatDate = {
    day: date.getDate().toString().padStart(2, '0'),
    month: (date.getMonth() + 1).toString().padStart(2, '0'),
    year: date.getFullYear().toString(),
    hours: date.getHours().toString().padStart(2, '0'),
    minutes: date.getMinutes().toString().padStart(2, '0')
  };

  return `${formatDate.day}/${formatDate.month}/${formatDate.year}, ${formatDate.hours}:${formatDate.minutes} EST`;
};

const updateFormatOfSweepstakes = (sweepstake: SweepstakeInterface) => {
  return {
    ...sweepstake,
    start_date: correctFormatOfDate(sweepstake.start_date),
    end_date: correctFormatOfDate(sweepstake.end_date),
    statuses: sweepstake.statuses.map((status) => {
      const updateStatus = status.split('_').join(' ');

      return updateStatus[0].toUpperCase() + updateStatus.slice(1);
    })
  };
};

const filteredArrayByStatus = (sweepstakes: Array<SweepstakeInterface>, status: string) => {
  if (status !== 'all') {
    const filteredArray = sweepstakes.filter(
      (sweepstake) => sweepstake.status === status
    );

    return filteredArray.map(updateFormatOfSweepstakes);
  }

  return sweepstakes.map(updateFormatOfSweepstakes);
};

const SweepstakesTableBody = () => {
  const dispatch = useAppDispatch();
  const sweepstakeState = useAppSelector((state) => state.sweepstakes);
  const sweepstakesData = useAppSelector(selectAllSweepstakes);
  const sweepstakeStatus = sweepstakeState.status;
  const sweepstakeFilterStatus = sweepstakeState.filterStatus;

  useEffect(() => {
    if (sweepstakeStatus === 'idle') {
      dispatch(fetchSweepstakes());
    }
  }, [sweepstakeStatus, dispatch]);

  let content;

  if (sweepstakeStatus === 'succeeded') {
    const orderedSweepstakes = filteredArrayByStatus(sweepstakesData, sweepstakeFilterStatus);

    let actionsContent;

    content = orderedSweepstakes.map((sweepstake: SweepstakeInterface) => {
      return (
        <tr key={uuid()}>
          <td>{sweepstake.title}</td>
          <td>{sweepstake.focus}</td>
          <td>{`${sweepstake.raised}`}</td>
          <td>{sweepstake.entries}</td>
          <td>
            {sweepstake.statuses.map((status) => {
              return <span key={uuid()}>{status}</span>;
            })}
          </td>
          <td>
            {sweepstake.status === 'active'
              ? (actionsContent = <button>Promote</button>)
              : (actionsContent = (
                  <React.Fragment>
                    <button>Accept</button>
                    <button>Decline</button>
                  </React.Fragment>
                ))}
          </td>
          <td>{sweepstake.start_date}</td>
          <td>{sweepstake.end_date}</td>
        </tr>
      );
    });
  }

  return (
    <React.Fragment>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Focus</th>
            <th>Raised</th>
            <th>Entries</th>
            <th>Status</th>
            <th>Actions</th>
            <th>Start date, time</th>
            <th>End date, time</th>
          </tr>
        </thead>
        <tbody>{content}</tbody>
      </table>
    </React.Fragment>
  );
};

export default SweepstakesTableBody;
