import React, { useEffect } from 'react';
import uuid from 'react-uuid';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { SweepstakeInterface } from '../../types/types';

import { fetchSweepstakes } from '../../store/sweepstakesSlice';
import Button from '../../UI/Button/Button';
import classes from './SweepstakesTableBody.module.css';
import classesSweepstakes from '../Sweepstakes.module.css';
import ColumnHead from '../../UI/ColumnHead/ColumnHead';

interface Props {
  onShowPromoteModal: (link: string) => void;
  onShowSwitchStatusModal: (action: string, id: number) => void;
}

const SweepstakesTableBody = (props: Props) => {
  const { onShowPromoteModal, onShowSwitchStatusModal } = props;

  const dispatch = useAppDispatch();
  const { filterStatus, sweepstakesArray, currentPage, countOfShowing } = useAppSelector(
    (state) => state.sweepstakes
  );

  const tableHeadTitles = [
    'Title',
    'Focus',
    'Raised',
    'Entries',
    'Status',
    'Actions',
    'Start date, time',
    'End date, time'
  ];
  const request = { status: filterStatus, page: currentPage, limit: countOfShowing };

  useEffect(() => {
    dispatch(fetchSweepstakes(request));
  }, [filterStatus, currentPage, countOfShowing]);

  return (
    <React.Fragment>
      <table className={classes.table}>
        <ColumnHead
          className={`${classesSweepstakes.text} ${classes['table-title']}`}
          tableHeadTitle={tableHeadTitles}
        />
        <tbody>
          {sweepstakesArray.map((sweepstake: SweepstakeInterface) => {
            return (
              <tr className={classes['line-wrapper']} key={uuid()}>
                <td className={`${classesSweepstakes.text} ${classes.column}`}>
                  {sweepstake.title}
                </td>
                <td className={`${classesSweepstakes.text} ${classes.column}`}>
                  {sweepstake.focus}
                </td>
                <td className={`${classesSweepstakes.text} ${classes.column}`}>
                  ${sweepstake.raised}
                </td>
                <td className={`${classesSweepstakes.text} ${classes.column}`}>
                  {sweepstake.entries}
                </td>
                <td className={`${classesSweepstakes.text} ${classes.column}`}>
                  <div className={classes['status-wrap']}>
                    {sweepstake.statuses.map((status) => {
                      const lowerCaseStatus = `status--${status
                        .split(' ')
                        .join('_')
                        .toLowerCase()}`;

                      return (
                        <span
                          className={`${classes.status} ${classes[lowerCaseStatus]}`}
                          key={uuid()}>
                          {status}
                        </span>
                      );
                    })}
                  </div>
                </td>
                <td className={`${classesSweepstakes.text} ${classes.column}`}>
                  <div className={classes['btns-wrap']}>
                    {sweepstake.status === 'active' ? (
                      <Button
                        type="button"
                        className={`${classes.btn} ${classes['btn--promote']}`}
                        onClick={() => onShowPromoteModal(sweepstake.link)}>
                        Promote
                      </Button>
                    ) : sweepstake.status === 'inactive' ? (
                      <React.Fragment>
                        <button
                          className={`${classes.btn} ${classes['btn--accept']}`}
                          onClick={() => onShowSwitchStatusModal('accept', sweepstake.id)}>
                          Accept
                        </button>
                        <button
                          className={`${classes.btn} ${classes['btn--decline']}`}
                          onClick={() => onShowSwitchStatusModal('decline', sweepstake.id)}>
                          Decline
                        </button>
                      </React.Fragment>
                    ) : (
                      ''
                    )}
                  </div>
                </td>
                <td className={`${classesSweepstakes.text} ${classes.column}`}>
                  {sweepstake.start_date}
                </td>
                <td className={`${classesSweepstakes.text} ${classes.column}`}>
                  {sweepstake.end_date}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default SweepstakesTableBody;
