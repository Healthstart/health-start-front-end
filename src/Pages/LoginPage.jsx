import React from 'react';
import styled from 'styled-components';
import Login from '../Compnents/Login';

const Container = styled.div`
    display: flex;
    align-items: center;
    width: 1920px;
    height: 100vh;
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
