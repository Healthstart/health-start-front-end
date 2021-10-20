import React, { useEffect } from 'react';
import { removeToken } from '../../Utils/managesToken';
import styled from 'styled-components';
import { Heading1, Heading3 } from '../../Atomic/Heading';
import { useHistory } from 'react-router';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Content = styled.div`
    width: 600px;
    height: 300px;
    text-align: center;
`;

const LogoutButton = styled.button`
    text-decoration: underline;
    background: none;
    border: none;
    cursor: pointer;

    &:hover {
        & > * {
            color: purple;
            font-weight: bold;
        }
    }
`;
const Logout = () => {
    const history = useHistory();

    useEffect(() => {
        removeToken();
    }, []);

    const onClickButton = () => {
        history.push({
            pathname: '/',
        });
        window.location.reload();
    };

    return (
        <Container>
            <Content>
                <Heading1>로그아웃</Heading1>
                <Heading3>로그아웃이 성공적으로 완료되었습니다.</Heading3>

                <LogoutButton onClick={onClickButton}>
                    <Heading3>로그인 하러가기</Heading3>
                </LogoutButton>
            </Content>
        </Container>
    );
};

export default Logout;
