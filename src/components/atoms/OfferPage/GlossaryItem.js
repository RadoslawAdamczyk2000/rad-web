import React from 'react';
import GlossaryItemWrapper from '../../../styles/Containers/GlossaryItemWrapper';

const GlossaryItem = ({defninition, name}) => {
    return(
        <GlossaryItemWrapper>
            <div className='head'>
                <p>
                    {name}
                </p>
            </div>
            <div className='content'>
                <p>
                    {defninition}
                </p>
            </div>
        </GlossaryItemWrapper>
    )
}

export default GlossaryItem;