import React from 'react';
import styled from 'styled-components';

import { LogOut } from 'react-feather';
import { User } from 'react-feather';

const Navbar = styled.div`
    position: absolute;

    width: 340px;
    height: 100%;
    background-color #fff;

    transform: translateY(-50%);
    top: 50%;

    border-radius: 20px;
`;
 
const Wrap = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

const Profile = styled.div`
    position: absolute;

    top: 70px;
    transform: translateX(-90%);
    left: 47%;

    display: flex;
    justify-content: space-around;
    
    width: 40%;
    height: 100px;
`;
const Usericon = styled.div`
    width: 50px;
    height: 50px;

    display: flex;    
    align-items: center;
    justify-content: center;

    border-radius: 50%;
    background-color: #f0f0f0;
`;

const Username = styled.p`
    display: block;

    line-height: 45px;
    font-weight: bold;

    font-size: 26px;
    color: #4e4e4e
`;

const Logout = styled.div`
    position: absolute;

    bottom: 20px;
    left: 20px;

    width: 50px;
    height: 50px;

    border-radius: 10px;
    background-color: #f3f3f5;

    display: flex;    
    align-items: center;
    justify-content: center;

    cursor: pointer;
    transition: 0.4s;
    &:hover{
        background-color: #e3e3e9;
        transform: translateX(5px);
    }
`;

const Sidemenu = () => {
    return(
        <Navbar>
            <Wrap>
                <Profile>
                    <Usericon>
                        <User color="gray" />
                    </Usericon>
                    <Username>Alex</Username>
                </Profile>
                <Logout>
                    <LogOut color="gray" />
                </Logout>
            </Wrap>
        </Navbar>
    );
}

export default Sidemenu;