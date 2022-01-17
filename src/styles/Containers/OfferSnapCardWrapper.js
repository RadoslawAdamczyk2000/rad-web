import styled from 'styled-components';

const OfferSnapCardWrapper = styled.div`
    align-items:center;
    display:flex;
    flex-direction:column;
    height:30rem;
    justify-content:start;
    overflow:hidden;
    position:relative;
    width:30rem;



    & > .box{
        align-items:center;
        /* background:black; */
        display:flex;
        flex-direction:column;
        flex-shrink:0;
        height:35rem;
        justify-content:space-evenly;
        position:relative;
        transition:.12s .12s linear transform;
        width:35rem;
    
        &:nth-of-type(1){
            color:${({theme}) => theme.colors.page.special};

            & > div{
                align-items:center;
                display:flex;
                flex-direction:column;
                height:100%;
                justify-content:center;
                width:100%;

                & > .icon{
                    font-size:4rem;
                }

                & > .title{
                    font-family:${({theme}) => theme.fonts.family.secondary};
                    font-size:${({theme}) => theme.fonts.size.page.content};
                    font-weight:${({theme}) => theme.fonts.weight.page.subTitle};
                }
            }
        }


        &:nth-of-type(2){
            align-items:center;
            background-color:${({theme}) => theme.colors.page.card};
            display:flex;
            height:100%;
            justify-content:center;
            padding:1.5rem;
            text-align:center !important;
            width:100%;   

             & > .content{
                font-size:${({theme}) => theme.fonts.size.page.button};
                font-weight:${({theme}) => theme.fonts.weight.page.secondary};
                height:100%;
                text-align:center !important;
                width:100%; 
             }
        }
    }

    &:hover > .box{
        transform:translateY(-100%);
    }
`

export default OfferSnapCardWrapper;