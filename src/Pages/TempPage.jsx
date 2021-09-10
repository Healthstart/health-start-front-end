import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Page } from "../Atomic/Background";
import { Heading1, Heading2, Heading3 } from '../Atomic/Heading';


const Content = styled.div`
    width: 100%;
    height: 300px;
    text-align: center;

    margin-top: 350px;
`;

const Back = styled(Link)`
    text-decoration: underline;
`;

const TempPage = () => {
    return (
        <Page>
            <Content>
                <Heading2>아직 미구현된 페이지입니다.</Heading2>
                <Heading3>개발 진행 중</Heading3>
                <Heading3>
                    <Back to="/">뒤로가기</Back>
                </Heading3>
            </Content>
        </Page>
    );
};

export default TempPage;
