import React, {useEffect, useState} from 'react';
import uuid from 'react-uuid';
import {SweepstakeInterface} from "../../../components/types/types";
import sweepstakes from "../Sweepstakes";

const SweepstakesTableBody = () => {
    const [data, setData] = useState<SweepstakeInterface[]>([]);

    const fetchData = async () => {
        try{
            const response = await fetch('http://localhost:3001/carts');
            const data = await response.json();


            const updatedSweepstakes = data.map((sweepstake: SweepstakeInterface) => {

                const correctFormatOfDate = (dt: string) => {
                    const date = new Date(Number(dt));
                    const minutes = Number(date.getMinutes())
                    const formattedMinutes = (minutes % 60).toString().padStart(2, '0');

                    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}, ${date.getHours()}:${formattedMinutes} EST`
                }

                return {
                    ...sweepstake,
                    start_date: correctFormatOfDate(sweepstake.start_date),
                    end_date: correctFormatOfDate(sweepstake.end_date),
                    statuses: sweepstake.statuses.map(status => {
                        const updateStatus = status.split('_').join(' ');

                        return updateStatus[0].toUpperCase() + updateStatus.slice(1)
                    }),
                }
            })

            setData(updatedSweepstakes)
        } catch(e) {
            console.log(e)
        }

    }

    useEffect(() => {
        fetchData()
    }, [])

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
                <tbody>
                {
                    data.map((sweepstake) => {
                        return (
                            <tr key={uuid()}>
                                <td>{sweepstake.title}</td>
                                <td>{sweepstake.focus}</td>
                                <td>{`${sweepstake.raised}`}</td>
                                <td>{sweepstake.entries}</td>
                                <td>
                                    {sweepstake.statuses.map(status => {
                                        return <span key={uuid()}>{status}</span>
                                    })}
                                </td>
                                <td>TEST</td>
                                <td>{sweepstake.start_date}</td>
                                <td>{sweepstake.end_date}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </React.Fragment>
    );
};

export default SweepstakesTableBody;