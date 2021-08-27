import React from 'react';
import styled from 'styled-components';
import Login from '../Compnents/Login';
import banner from '../Image/banner2.jpg';

const Container = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    width: 1920px;
    height: 100vh;
    background: #efefef;
    box-shadow: 15px 15px 35px #807c7c, -15px -15px 35px #ffffff;
`;

const BackgroundImage = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.95;
`;

const LoginPage = () => {
    return (
        <Container>
            <BackgroundImage src={banner} />
            <Login />
        </Container>
    );
};

export default LoginPage;
