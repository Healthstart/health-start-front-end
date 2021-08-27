import React from 'react';
import styled from 'styled-components';
import { InputForm, LabelForm } from '../../Atomic/Form';
import { Blank } from '../../Atomic/Blank';
import { Heading3 } from '../../Atomic/Heading';
import { RowButton2 } from '../../Atomic/Buttons';

const Container = styled.div`
    display: flex;
    padding: 2rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 500px;
    height: 450px;
    border: 1px solid black;
`;

const Login = () => {
    return (
        <Container>
            <Heading3>로그인</Heading3>

            <Blank h={2} />

            <LabelForm>아이디</LabelForm>
            <InputForm placeholder="Email Address" />

            <Blank h={1} />

            <LabelForm>비밀번호</LabelForm>
            <InputForm placeholder="Email Address" />

            <Blank h={2} />

            <RowButton2>LOGIN</RowButton2>
        </Container>
    );
};

export default Login;
