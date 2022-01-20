import React from 'react';
import styled from 'styled-components';

const Options = ({isWebsite, isSeo, isAnalytics}) => {
    return(
        <div>

            <select>
                {
                    isWebsite &&
                    <>
                        <option>WWW mini</option>
                        <option>WWW standard</option>
                        <option>WWW pro</option>
                    </>
                }
                {
                    isSeo &&
                    <>
                        <option>SEO mini</option>
                        <option>SEO standard</option>
                        <option>SEM</option>
                    </>
                }
                {
                    isAnalytics &&
                    <option>Analityka</option>
                }
            </select>
        </div>
    )
}

export default Options;