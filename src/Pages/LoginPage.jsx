import React from 'react';
import styled from 'styled-components';
import Login from '../Compnents/Login';

const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1520px;
    height: 768px;
    border-radius: 15px;
    background: #efefef;
    box-shadow: 15px 15px 35px #807c7c, -15px -15px 35px #ffffff;
`;

const LoginPage = () => {
    return (
        <Container>
            <Login />
        </Container>
    );
};

export default LoginPage;
