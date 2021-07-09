import styled from 'styled-components';

export const Blank = styled.div`
    width: ${(props) => (props.w ? props.w : 1)}rem;
    height: ${(props) => (props.h ? props.h : 1)}rem;
`;