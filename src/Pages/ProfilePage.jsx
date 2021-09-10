import React, { useState } from 'react';
import styled from 'styled-components';
import { Page } from "../Atomic/Background";

const Card = styled.div`
    position: absolute;
    
    width: 500px;
    height: 300px;

    top: 50px;
    left: 40px;

    background-color: #fcfcfc;
    border-radius: 20px;
`;

const ProfilePage = () => {
    return(
        <Page>
            <Card>kfjalkfjsjkdafj</Card>
        </Page>
    )
}

export default ProfilePage;