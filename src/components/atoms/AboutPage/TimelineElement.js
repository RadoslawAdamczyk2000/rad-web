import React from 'react';

const TimelineItem = ({color, content, date, icon, title}) => {
    return(
        <div color={color}>
            <div>
                <span>
                    {date}
                </span>
                <span>
                    {icon}
                </span>
            </div>
            <div>
                <p>
                    {title}
                </p>
                <p>
                    {content}
                </p>
            </div>
        </div>
    )
}

export default TimelineItem;