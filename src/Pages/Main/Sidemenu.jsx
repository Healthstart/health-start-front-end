import React from 'react';
import styled from 'styled-components';

import { LogOut } from 'react-feather';
import { User } from 'react-feather';
import { Clock } from "react-feather";
import { Users } from "react-feather";
import { PlusCircle } from "react-feather";

const Navbar = styled.div`
    position: absolute;

    width: 340px;
    height: 100%;
    background-color #fff;

    transform: translateY(-50%);
    top: 50%;

    border-radius: 20px;
    -webkit-box-shadow: 21px 0px 42px -8px rgba(0,0,0,0.05); 
    box-shadow: 21px 0px 42px -8px rgba(0,0,0,0.0.05);    
`;
 
const Wrap = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

const Profile = styled.div`
    position: absolute;
    z-index: 0;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    width: 100%;
    height: 300px;

    border-radius: 20px 0 0 0;
    background-color: #f6f6f6;
`;
const Usericon = styled.div`
    width: 70px;
    height: 70px;

    display: flex;    
    align-items: center;
    justify-content: center;

    border-radius: 50%;
    background-color: #f1f1f1;

    
`;

const Username = styled.p`
    display: block;

    margin-top: 10px;
    line-height: 45px;
    font-weight: bold;

    font-size: 28px;
    color: #696969;
`;
const Useremail = styled.h5`
    color: #8b8b8b;
    font-weight: 400;
`;

const MenuList = styled.div`
    position: absolute;
    z-index: 0;

    top: 370px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    width: 100%;
    height: 320px;

    border-radius: 20px 0 0 0;
    /* background-color: #555555; */
`;

const MenuItem = styled.div`
    cursor: pointer;
    align-self: center;

    display: flex;

    width: 90%;
    height: 85px;

    border-radius: 7px;
    /* background-color: #444; */
    transition: 0.3s;
    &:hover{
        background-color: #eee;
    }
`;
const MenuItemText = styled.h5`
    text-align: center;
    line-height: 80px;
    font-size: 22px;
    font-weight: 600;
    color: #858585;
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
                        <User color="gray" size={35}/>
                    </Usericon>
                    <Username>Alex</Username>
                    <Useremail>alex@gmail.com</Useremail>
                </Profile>
                <MenuList>
                    <MenuItem>
                        <Clock color="gray" size={25} style={{marginTop: 30 ,marginLeft: 90, marginRight: 10}}/>
                        <MenuItemText>루틴실행</MenuItemText>
                    </MenuItem>
                    <MenuItem>
                        <Users color="gray" size={25} style={{marginTop: 30 ,marginLeft: 90, marginRight: 13}}/>
                        <MenuItemText>커뮤니티</MenuItemText>
                    </MenuItem>
                    <MenuItem>
                        <PlusCircle color="gray" size={25} style={{marginTop: 30 ,marginLeft: 90, marginRight: 10}}/>
                        <MenuItemText>식단추가</MenuItemText>
                    </MenuItem>
                </MenuList>
                <Logout>
                    <LogOut color="gray" />
                </Logout>
            </Wrap>
        </Navbar>
    );
}

export default Sidemenu;