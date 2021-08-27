import styled from 'styled-components';

export const RowButton = styled.button`
    cursor: pointer;

    width: ${(props) => (props.w ? props.w : 120)}px;
    height: ${(props) => (props.h ? props.h : 50)}px;

    background-color: ${(props) => (props.bgColor ? props.bgColor : '#fa2929')};
    color: ${(props) => (props.color ? props.color : '#ffffff')};
    font-size: ${(props) => (props.fSize ? props.fSize : 20)}px;
    font-weight: ${(props) => (props.fWei ? props.fWei : 600)};

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    border: none;
    border-radius: ${(props) => (props.bdr ? props.bdr : 15)}px;
    outline: none;

    transition: 0.3s;
    &:hover {
        transform: translateY(-3px);
    }
`;

export const RowButton2 = styled(RowButton)`
    border-radius: ${(props) => (props.bdr ? props.bdr : 150)}px;
`;

export const CircleButton = styled(RowButton)`
    width: ${(props) => (props.w ? props.w : 50)}px;
    height: ${(props) => (props.h ? props.h : 50)}px;

    border-radius: 50%;
`;

export default RowButton;
