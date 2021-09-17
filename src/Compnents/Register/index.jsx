import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Modal from 'react-modal';
import { InputForm, LabelForm } from '../../Atomic/Form';
import { Blank } from '../../Atomic/Blank';
import { Heading3 } from '../../Atomic/Heading';
import { RowButton2 } from '../../Atomic/Buttons';
import toast from 'react-hot-toast';
import Api from '../../Api';

const OpenModalAnimate = keyframes`
  0% {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.9);
  }
  10% {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1.05);
  }
  20% {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
  }
`;

const ModalContainer = styled(Modal)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 2rem;
    background-color: #eee;
    outline: none;

    animation: ${OpenModalAnimate} 2s ease-out;
`;

const Container = styled.form`
    display: flex;
    background-color: #eee;
    padding: 2rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

const Register = ({ isOpen, setIsOpen }) => {
    const initialState = {
        email: '',
        password: '',
        passwordC: '',
        username: '',
    };
    const [RegisterState, setRegisterState] = useState(initialState);
    const { email, password, passwordC, username } = RegisterState;

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setRegisterState((prevState) => ({ ...RegisterState, [name]: value }));
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        if (email.trim() === '' || password.trim() === '' || passwordC.trim() === '' || username.trim() === '') {
            toast.error('공백이 존재합니다!');
            return;
        }

        if (password !== passwordC) {
            toast.error('비밀번호가 일치하지 않습니다!');
            setRegisterState((prevState) => ({ ...prevState, password: '', passwordC: '' }));
            return;
        }

        try {
            await Api.post('/auth/register', { email, password, username });
            setIsOpen((prevState) => false);
            toast.success('회원가입 성공!');
        } catch (err) {
            toast.error(err.response.data.error);
            throw err;
        }

        setRegisterState((prevState) => initialState);
    };

    return (
        <ModalContainer
            isOpen={isOpen}
            onRequestClose={() => setIsOpen((prevState) => false)}
            style={{
                overlay: {
                    backgroundColor: 'rgba(0,0,0, 0.4)',
                },
            }}
            ariaHideApp={false}
        >
            <Container onSubmit={(e) => handleOnSubmit(e)}>
                <Heading3 fSize={32} fWei={600} color="#565656">
                    회원가입
                </Heading3>

                <Blank h={2.5} />

                <LabelForm>아이디 (이메일)</LabelForm>
                <InputForm placeholder="Email Address" type="email" value={email} name="email" onChange={handleOnChange} />

                <Blank h={1.5} />

                <LabelForm>사용자 이름</LabelForm>
                <InputForm placeholder="Using Name" type="text" value={username} name="username" onChange={handleOnChange} />

                <Blank h={1.5} />

                <LabelForm>비밀번호</LabelForm>
                <InputForm placeholder="Password" type="password" value={password} name="password" onChange={handleOnChange} />

                <Blank h={1.5} />

                <LabelForm>비밀번호 확인</LabelForm>
                <InputForm placeholder="Same Password" type="password" value={passwordC} name="passwordC" onChange={handleOnChange} />

                <Blank h={3} />

                <RowButton2 type="submit" fSize={16}>
                    REGISTER
                </RowButton2>
            </Container>
        </ModalContainer>
    );
};

export default Register;
