import React from 'react';
import {charts} from '../../../data/charts';
import Chart from '../../atom/AboutPage/Chart';
const Charts = () => {
    const {frontend,backend,cms} = charts;
    return(
        <>
            <Chart dataChart={frontend}/>
            <Chart dataChart={backend}/>
            <Chart dataChart={cms}/>
        </>
    )
}

export default Charts;