import React, { useState } from 'react';
import styled from 'styled-components';
import { InputForm, LabelForm } from '../../Atomic/Form';
import { Blank } from '../../Atomic/Blank';
import { Heading3 } from '../../Atomic/Heading';
import { RowButton2 } from '../../Atomic/Buttons';
import toast from 'react-hot-toast';
import Api from '../../Api';
import { setToken } from '../../Utils/managesToken';
import { useHistory } from 'react-router';

const Container = styled.form`
    display: flex;
    background-color: #eee;
    padding: 2rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 35vw;
    min-width: 500px;
    height: 100%;

    box-shadow: 2px 2px 5px #babecc, -5px -5px 10px #ffffff;
    border-radius: 0 15px 15px 0;

    /* @media screen and (max-width: 680px) {
        width: 28%;
    }
    @media screen and (max-width: 600px) {
        width: 500px;
    } */
`;

const LinkRegister = styled.p`
    color: #444;
    text-decoration: underline;
    opacity: 0.8;
    font-weight: 600;
    cursor: pointer;

    &:hover {
        opacity: 0.65;
    }
`;

const Login = ({ setIsOpen }) => {
    const initialState = {
        email: '',
        password: '',
    };
    const [loginState, setLoginState] = useState(initialState);
    const { email, password } = loginState;
    const history = useHistory();

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setLoginState((prevState) => ({ ...loginState, [name]: value }));
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        if (email.trim() === '' || password.trim() === '') {
            toast.error('이메일 혹은 비밀번호가 공백입니다!');
            return;
        }

        try {
            const data = await Api.post('/auth/login', { email, password });
            setToken(data.data.token);
            toast.success('로그인 성공!');
            setLoginState((prevState) => initialState);
            history.push({
                pathname: '/content',
            });
            window.location.reload();
        } catch (err) {
            toast.error(err.response.data.error);
            setLoginState((prevState) => ({ ...prevState, password: '' }));
            throw err;
        }
    };

    return (
        <Container onSubmit={(e) => handleOnSubmit(e)}>
            <Heading3 fSize={32} fWei={600} color="#565656">
                로그인
            </Heading3>

            <Blank h={2.5} />

            <LabelForm>아이디</LabelForm>
            <InputForm placeholder="Email Address" type="email" value={email} name="email" onChange={handleOnChange} />

            <Blank h={1.5} />

            <LabelForm>비밀번호</LabelForm>
            <InputForm placeholder="Password" type="password" value={password} name="password" onChange={handleOnChange} />

            <Blank h={1.5} />

            <LinkRegister onClick={() => setIsOpen((prevState) => true)}>회원가입이 필요하신가요?</LinkRegister>

            <Blank h={2} />

            <RowButton2 type="submit">LOGIN</RowButton2>
        </Container>
    );
};

export default Login;
