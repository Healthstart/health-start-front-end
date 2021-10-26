import React from 'react';
import styled from 'styled-components';
import { Card } from '../../Atomic/Background';

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

export const FavoriteRoutines = () => {
    return(
        <FavoriteRoutinesCard>
            <TitleText>즐겨찾기 루틴</TitleText>
        </FavoriteRoutinesCard>
    ) 
    ;
};
