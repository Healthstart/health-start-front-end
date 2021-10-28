import React from 'react';
import styled from 'styled-components';
import { Card } from '../../Atomic/Background';
import { Star } from "react-feather";

const FavoriteRoutinesCard = styled(Card)`
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

    ::-webkit-scrollbar {
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
    &:hover {
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

const Remove = styled(Star)`
    position: absolute;

    top: 1.8rem;
    right: 1.5rem;

    stroke: #747474;

    transition: 0.3s;
    fill: #ca9116;
    stroke: #ca9116;

    &:hover {
        transform: scale(1.07);
        fill: #aaa;
        stroke: #aaa;
    }
`;

export const FavoriteRoutines = () => {
    const ItemList = [
        {
            RoutineName: "월요일 아침 루틴",
            Author: "한동진"
        },
        {
            RoutineName: "화요일 아침 루틴",
            Author: "하선우"
        },
        {
            RoutineName: "수요일 점심 루틴",
            Author: "한동진"
        },
        {
            RoutineName: "목요일 저녁 루틴",
            Author: "하선우"
        },
        {
            RoutineName: "금요일 저녁 루틴",
            Author: "노윤탁"
        },
        {
            RoutineName: "토요일 아침 루틴",
            Author: "정준호"
        },
        {
            RoutineName: "일요일 아침 루틴",
            Author: "하선우"
        },
    ];
    
    const datas = ItemList.map((x) => (
        <RoutineBlock>
        <RoutineName>{x.RoutineName}</RoutineName>
        <RoutineDetail>작성자 : {x.Author}</RoutineDetail>
        <Remove />
        </RoutineBlock>
    ));

    return(
        <FavoriteRoutinesCard>
            <TitleText>즐겨찾기 루틴</TitleText>
            <RoutinesWrap>
               {datas}
            </RoutinesWrap>
        </FavoriteRoutinesCard>
    ) 
    ;
};
