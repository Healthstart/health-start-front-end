import React from 'react';
import styled from 'styled-components';
import Login from '../Compnents/Login';

const Container = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    width: 1920px;
    height: 100vh;
    background: #efefef;
    box-shadow: 15px 15px 35px #807c7c, -15px -15px 35px #ffffff;
`;

const BackgroundImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: 62px;
`;

const LoginPage = () => {
    return (
        <Container>
            <BackgroundImage>---------------IMAGE--------------</BackgroundImage>
            <Login />
        </Container>
    );
};

export default LoginPage;
