import React from 'react';
import TimelineItem from '../../atom/AboutPage/TimelineItem';
import {timeline} from '../../../data/timeline';
import TimelineWrapper from './styles/TimelineWrapper';
const Timeline = () => {
    return(
        <TimelineWrapper>
            {
                timeline.map( ({color,content,date,icon,title}) => 
                    <TimelineItem
                        color={color}
                        content={content}
                        date={date}
                        icon={icon}
                        title={title}
                    />
                )
            }
        </TimelineWrapper>
    )
}

export default Timeline;