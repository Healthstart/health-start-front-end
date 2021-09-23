import React, { useState } from 'react';
import styled from 'styled-components';
import { Page } from "../Atomic/Background";

const Card = styled.div`
    position: absolute;
    cursor: pointer;
    
    width: 500px;
    height: 300px;

    top: 50px;
    left: 40px;

    -webkit-box-shadow: 21px 0px 42px -8px rgba(0,0,0,0.03); 
    box-shadow: 21px 0px 42px -8px rgba(0,0,0,0.0.05);    
    
    background-color: #fcfcfc;
    
    border: 1.3px solid #e6e6e6;
    border-radius: 20px;

    transition: 0.3s;
    &:hover{
        transform: translateY(-2px) scale(1.01);
        -webkit-box-shadow: 21px 0px 42px -8px rgba(0,0,0,0.1); 
        box-shadow: 21px 0px 42px -8px rgba(0,0,0,0.0.1);    
    }
`;

const ProfilePage = () => {
    return(
        <Page>
            <Card>kfjalkfjsjkdafj</Card>
        </Page>
    )
}

export default ProfilePage;