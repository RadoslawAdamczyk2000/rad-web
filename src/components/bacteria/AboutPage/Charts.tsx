import React from 'react';
import {charts} from '../../../data/charts';
import Chart from '../../atom/AboutPage/Chart';
import ChartsWrapper from './styles/ChartsWrapper';
const Charts = () => {
    const {frontend,backend,cms} = charts;
    return(
        <ChartsWrapper>
            <Chart dataChart={frontend}/>
            <Chart dataChart={backend}/>
            <Chart dataChart={cms}/>
        </ChartsWrapper>
    )
}

export default Charts;