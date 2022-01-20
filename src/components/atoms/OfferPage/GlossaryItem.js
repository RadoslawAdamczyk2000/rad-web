import React from 'react';

const GlossaryItem = ({defninition, name}) => {
    return(
        <div>
            <div>
                <p>
                    {name}
                </p>
            </div>
            <div>
                <p>
                    {defninition}
                </p>
            </div>
        </div>
    )
}

export default GlossaryItem;