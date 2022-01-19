import React from 'react';

const Charts = ({isCms, isStack}) => {
    return(
        <>
            {
                isCms &&
                <>
                    <h1>cms chart</h1>
                </>
            }
            {
                isStack &&
                <>
                    <h1>stack chart</h1>
                </>
            }
        </>
    )
}

export default Charts;