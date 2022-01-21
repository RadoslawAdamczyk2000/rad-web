import React from 'react';
import {RiPhoneLine} from 'react-icons/ri';
import {VscMailRead} from 'react-icons/vsc';

const Info = () => {
    return(
        <div>
            <div>
                <a href='mailto:radoslaw.adamczyk@gmail.com'>
                    <span>
                        <VscMailRead/>
                    </span>            
                    <span>
                        radoslaw.adamczyk2000@gmail.com
                    </span>            
                </a>
                <a href='tel:+48794100413'>
                    <span>
                        <RiPhoneLine/>
                    </span>            
                    <span>
                        +48 794-100-413
                    </span>            
                </a>
            </div>
        </div>
    )
}

export default Info;