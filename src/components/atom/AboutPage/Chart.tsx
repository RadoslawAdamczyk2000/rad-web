import React from 'react';
import {Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';
interface Ichart {
    dataChart : Object
}
const Chart = ({dataChart}:Ichart) => {
    ChartJS.register(RadialLinearScale, ArcElement, Tooltip);
    return(
        <div>
            <PolarArea
                data={dataChart}
                style={{
                    color:'#fff',
                    width:'100%'
                }}
            />
        </div>
    )
}
export default Chart;