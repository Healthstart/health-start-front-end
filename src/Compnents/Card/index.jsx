import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: ${(props) => (props.w ? props.w : 540)}px;
    height: ${(props) => (props.h ? props.h : 540)}px;
    background-color: #fff;
    box-shadow: 3px 3px 30px 15px #c2c2c2;
    border-radius: ${(props) => (props.bdr ? props.bdr : 30)}px;
    padding: 1rem;
`;

const Card = ({ children, w, h, bdr }) => {
    return (
        <Container w={w} h={h} bdr={bdr}>
            {children}
        </Container>
    );
};

export default Card;
