import React from 'react';
import styled from 'styled-components';
import { Card } from '../../Atomic/Background';
import { Trash2 } from "react-feather";

import useRoutine from '../../Hooks/useRoutine';

const MyRoutinesCard = styled(Card)`
    margin-top: 10px;

    position: relative;
`;
const TitleText = styled.h3`
    display: inline-block;

    margin-top: 30px;
    margin-left: 30px;
    padding: 7px 15px 7px 15px;

    background-color: #fcfcfc;
    color: #353535;

    border: 1.3px solid #e6e6e6;
    border-radius: 20px;
`;

const AddRoutine = styled.button`
    z-index: 50;
    cursor: pointer;

    display: block;
    position: absolute;

    top: 2rem;
    right: 40px;

    width: 40px;
    height: 40px;

    background-color: #fcfcfc;
    color: #353535;

    border: 1.3px solid #e6e6e6;
    border-radius: 15px;

    transition: 0.3s;
    &:hover{
        transform: scale(1.07);
        background-color: #e7e7e7;
    }
`;

const RoutinesWrap = styled.div`
    margin: 20px auto;

    width: 25vw;
    height: 600px;

    border-top: 1px solid #eee;

    overflow: hidden;
    overflow-y: scroll;
    
    ::-webkit-scrollbar{
        display: none;
    }
`;

const RoutineBlock = styled.div`
    display: block;
    margin: 0 auto;

    width: 25vw;
    height: 80px;

    margin-top: 20px;
    
    background-color: #fcfcfc;
    border: 1.3px solid #e6e6e6;
    border-radius: 20px;

    position: relative;
    transition: 0.3s;
    &:hover{
        background-color: #f3f2f2;
        transform: translateY(-5px);
    }
`;

const RoutineName = styled.div`
    font-size: 20px;
    font-weight: 600;

    color: #585858;

    margin-left: 20px;
    margin-top: 10px;
`;
const RoutineDetail = styled.div`
    font-size: 15px;
    font-weight: 300;

    color: #868686;

    margin-left: 20px;
`;

const Remove = styled(Trash2)`
    position: absolute;
    
    top: 1.8rem;
    right: 1.5rem;
    
    stroke: #747474;

    transition: 0.3s;
    &:hover{
        transform: scale(1.07);
        stroke: #c93636; 
    }
    
`;

export const MyRoutines = () => {

    const Routines = useRoutine();
    const testClick = () => {
        console.log(Routines);
    }

    return (
        <MyRoutinesCard>
            <TitleText>내 루틴</TitleText>
            <AddRoutine onClick={testClick}>+</AddRoutine>
            <RoutinesWrap>
                {Routines ? Routines.map((x) => 
                <RoutineBlock>
                    <RoutineName>우하하하</RoutineName>
                    <RoutineDetail>tset</RoutineDetail>
                    <Remove />
                </RoutineBlock>)}
                
            </RoutinesWrap>
        </MyRoutinesCard>
    );
};
