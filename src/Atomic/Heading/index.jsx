import styled from 'styled-components';

export const Heading1 = styled.h1`
    color: ${(props) => (props.color ? props.color : '#1e1e1e')};
    font-size: ${(props) => (props.fSize ? props.fSize : 32)}px;
    font-weight: ${(props) => (props.fWei ? props.fWei : 500)};
`;

export const Heading2 = styled.h2`
    color: ${(props) => (props.color ? props.color : '#1e1e1e')};
    font-size: ${(props) => (props.fSize ? props.fSize : 28)}px;
    font-weight: ${(props) => (props.fWei ? props.fWei : 500)};
`;

export const Heading3 = styled.h3`
    color: ${(props) => (props.color ? props.color : '#1e1e1e')};
    font-size: ${(props) => (props.fSize ? props.fSize : 24)}px;
    font-weight: ${(props) => (props.fWei ? props.fWei : 500)};
`;

export default Heading1;
