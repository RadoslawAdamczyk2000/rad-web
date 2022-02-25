import React from 'react';
import DictonaryCardWrapper from './styles/DictonaryCardWrapper';
interface IdictonaryCard {
    definition : string,
    title : string
}
const DictonaryCard = ({definition,title}:IdictonaryCard) => {
    return(
        <DictonaryCardWrapper>
            <div>
                {title}
            </div>
            <div>
                {definition}
            </div>
        </DictonaryCardWrapper>
    )
}
export default DictonaryCard;