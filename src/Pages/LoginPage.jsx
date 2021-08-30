import React, { useState } from 'react';
import styled from 'styled-components';
import Login from '../Compnents/Login';
import banner from '../Image/banner2.jpg';
import { Blank } from '../Atomic/Blank';
import Register from '../Compnents/Register';

const Container = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    width: 1920px;
    height: 100vh;
    box-shadow: 15px 15px 35px #807c7c, -15px -15px 35px #ffffff;
`;

const BackgroundImage = styled.img`
    z-index: -1;
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

const LoadingText = styled.p`
    z-index: -2;
`;

const LoginPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Container>
            <BackgroundImage src={banner} />
            <Login setIsOpen={setIsOpen} />
            <Blank w={5} />
            <LoadingText>Loading to Image...</LoadingText>

            <Register isOpen={isOpen} setIsOpen={setIsOpen} />
        </Container>
    );
};

export default LoginPage;
