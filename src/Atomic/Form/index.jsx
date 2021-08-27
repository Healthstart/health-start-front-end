import React from 'react';
import styled from 'styled-components';
import { Heading3 } from '../Heading';

export const InputForm = styled.input`
    width: ${(props) => (props.w ? props.w : 400)}px;
    height: ${(props) => (props.h ? props.h : 50)}px;
    font-size: 1.2rem;
    padding: 0 1.2rem;
    color: #565656;
    border: none;
    border-radius: 20rem;
    background: #efefef;
    box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #ffffff;
    outline: none;
    transition: all 0.3s ease-in-out;

    &:focus {
        box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #ffffff;
    }
    &::placeholder {
        text-align: center;
    }
`;

const LabelContainer = styled.label`
    display: block;
    margin-bottom: 0.3rem;
`;

export const LabelForm = ({ children }) => {
    return (
        <LabelContainer>
            <Heading3 fSize={22} color={'#565656'}>
                {children}
            </Heading3>
        </LabelContainer>
    );
};
