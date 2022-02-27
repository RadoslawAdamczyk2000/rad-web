import styled from 'styled-components';
const SpecialTitleWrapper = styled.p`
    color:${({theme}) => theme.colors.page.buttons};
    font-family:${({theme}) => theme.fonts.family.secondary};
    font-size:${({theme}) => theme.fonts.size.page.button};
    font-weight:${({theme}) => theme.fonts.weight.secondary};
`
export default SpecialTitleWrapper;