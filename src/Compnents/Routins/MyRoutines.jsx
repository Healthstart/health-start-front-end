import React from 'react';
import styled from 'styled-components';
import { Card } from '../../Atomic/Background';
import { Trash2 } from "react-feather";

const MyRoutinesCard = styled(Card)`
    margin-top: 10px;
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
    right: 0;
    
    opacity: 0.6;

    
`;

export const MyRoutines = () => {
    return (
        <MyRoutinesCard>
            <TitleText>내 루틴</TitleText>
            <RoutinesWrap>
                <RoutineBlock>
                    <RoutineName>우하하하</RoutineName>
                    <RoutineDetail>tset</RoutineDetail>
                    <Remove />
                </RoutineBlock>
            </RoutinesWrap>
        </MyRoutinesCard>
    );
};
