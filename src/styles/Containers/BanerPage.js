import styled from 'styled-components';

const BanerPage = styled.div`
    align-items:center;
    display:flex;
    justify-content:center;
    flex-direction:column;
    margin:5rem auto 10rem;
    max-height:85vh;
    min-height:80rem;
    /* width:50%; */


    & > div{

        & > div:nth-of-type(1){
        }

         & > div:nth-of-type(2){
             margin:3rem 0;
             width:50%;

            @media only screen and (max-width:700px){
                width:75%;
            }
         }
        /* & > div:nth-of-type() */
    }
`

export default BanerPage;