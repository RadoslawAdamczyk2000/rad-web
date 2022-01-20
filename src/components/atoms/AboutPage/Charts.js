import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import {Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend} from 'chart.js';

const dataCms = {
    labels:['WordPress','Joomla','Shoper','PrestaShop','Shopify','IdoSell','wix.com','DMS CMS','RedCart','ShopGold'],
    datasets:[{
        label:'Znajomość systemów zarządzania treścią',
        data:[10,7,7,7,5,6,3,3,5,4],
        backgroundColor:['#21759b','#e4b645','#f4615a','#251b5b','#96bf48','#989897','#faad4d','#343a40','#F70000','#D8BF6C']
    }]
}

const dataStack = {
    labels:['HTML 5','CSS 3','Bootstrap','preprocesor SCSS','Tailwind','JavaScript','ReactJs','GatsbyJs','NextJs','VueJs','AngularJs','PHP','MySQL','C++','Java'],
    datasets:[{
        label:'Mój stack technologiczny',
        data:[10,10,8,5,3,6,6,5,3,3,2,5,5,1,3],
        backgroundColor:['rgb(120, 124, 181)','rgb(41, 101, 241)','rgb(205, 103, 153)','#9b5de5','#24b4fb','rgb(240, 219, 79)','#61DBFB','#663399','#45ce05','#41B883','#a6120d','#8993be','#F29111','#dfe7fd','#f77f00']
    }]
}



ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);
const Charts = ({isCms, isStack}) => {
    return(
        <>
            {
                isCms &&
                <PolarArea
                    data={dataCms}
                    style={{
                        width:'100%'
                    }}
                />
            }
            {
                isStack &&
                <PolarArea
                    data={dataStack}
                    style={{
                        width:'100%'
                    }}
                />
            }
        </>
    )
}

export default Charts;