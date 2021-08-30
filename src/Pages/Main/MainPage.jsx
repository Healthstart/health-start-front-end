import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Sidemenu from './Sidemenu';
import { LogOut } from 'react-feather';

const Background = styled.div`
    position: fixed;

    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #cbd1df;
`;

const Dashboard = styled.div`
    position: relative;

    width: 88%;
    height: 90%;
    margin: 0 auto;

    background-color: #f6f7f9;
    border-radius: 35px;
`;


const MainPage = () => {
    return (
       <Background>
           <Dashboard>
                <Sidemenu/>
           </Dashboard>
       </Background>
    );
};

export default MainPage;
