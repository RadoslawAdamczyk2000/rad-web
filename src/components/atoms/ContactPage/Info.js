import React from 'react';
import {RiPhoneLine} from 'react-icons/ri';
import {VscMailRead} from 'react-icons/vsc';
import InfoContactWrapper from '../../../styles/Containers/InfoContactWrapper';

const Info = () => {
    return(
        <InfoContactWrapper>
            <div className='box'>
                <a href='mailto:radoslaw.adamczyk@gmail.com' className='item'>
                    <span>
                        <VscMailRead/>
                    </span>            
                    <span>
                        radoslaw.adamczyk2000@gmail.com
                    </span>            
                </a>
                <a href='tel:+48794100413' className='item'>
                    <span>
                        <RiPhoneLine/>
                    </span>            
                    <span>
                        +48 794-100-413
                    </span>            
                </a>
            </div>
        </InfoContactWrapper>
    )
}

export default Info;