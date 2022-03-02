import React from 'react';
import offer from '../../../data/offer';
import DictonaryCard from '../../atom/OfferPage/DictonaryCard';
import DictonaryWrapper from './styles/DictonaryWrapper';
const Dictonary = () => {
    return(
        <DictonaryWrapper>
            {
                offer.glossary.map(({defninition,name}) =>
                    <DictonaryCard
                        definition={defninition}
                        title={name}
                    />    
                )
            }
            
        </DictonaryWrapper>
    )
}
export default Dictonary;