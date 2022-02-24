import React from 'react';
import TimelineItem from '../../atom/AboutPage/TimelineItem';
import {timeline} from '../../../data/timeline';
const Timeline = () => {
    return(
        <>
            {
                timeline.map( ({color,content,date,icon,title}) => 
                    <>
                        <TimelineItem
                            color={color}
                            content={content}
                            date={date}
                            icon={icon}
                            title={title}
                        />
                        <span/>
                    </>
                )
            }
        </>
    )
}

export default Timeline;