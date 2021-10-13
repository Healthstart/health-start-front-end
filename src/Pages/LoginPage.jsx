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
    width: 100vw;
    height: 100vh;
    box-shadow: 15px 15px 35px #807c7c, -15px -15px 35px #ffffff;
`;

const BackgroundImage = styled.img`
    object-fit: cover;
    z-index: -1;
const FlexBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 65vw;
    height: 100%;
    padding: 5rem;
`;

const LoginPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Container>
            <Login setIsOpen={setIsOpen} />

            <Register isOpen={isOpen} setIsOpen={setIsOpen} />
        </Container>
    );
};

export default LoginPage;
