import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { RoutinButton } from '../../Atomic/Buttons';
import toast from 'react-hot-toast';
import Api from '../../Api';
import useRoutine from '../../Hooks/useRoutine';

const Container = styled(motion.div)`
    display: flex;
    position: absolute;
    z-index: 40;

    padding: 2rem;
    width: 90%;
    height: 90%;

    background-color: #f1f1f1;
    border-radius: 30px;

    top: 5%;
    left: 5%;
`;

const RoutinList = styled.div`
    position: relative;
    width: 50%;
    padding: 1rem;
    height: 100%;
    overflow-y: scroll;

    &::after {
        position: absolute;
        content: '';
        top: 7%;
        right: 0;
        width: 5px;
        height: 86%;
        background-color: rgba(20, 20, 20, 0.7);
        border-radius: 30px;
    }
`;

const RoutinPreview = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    padding: 2rem;
    text-align: center;
`;

const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 80%;
    height: 15%;
    padding: 1rem 2rem;
    margin-bottom: 1rem;
    background-color: ${(props) => (props.clicked ? '#141414' : 'inherit')};
    color: ${(props) => (props.clicked ? '#fff' : '#141414')};

    border-radius: 8px;
    cursor: pointer;

    &:hover {
        border: 2px solid #141414;
    }
    &:last-child {
        margin: 0;
    }
`;

const PreviewItemContainer = styled.div`
    margin-bottom: 2vh;

    &:last-child {
        margin: 0;
    }
`;

const SelectedRoutin = ({ isSelectState, selectedRoutinState }) => {
    const [isSelect, setIsSelect] = isSelectState;
    const routines = useRoutine();
    const [selectedRoutin, setSelectedRoutin] = selectedRoutinState;

    const onClickButton = () => {
        if (selectedRoutin.content.length <= 0) {
            toast.error('루틴을 선택해주세요!');
            return;
        }

        setIsSelect((prevState) => true);
    };

    const RoutinItem = ({ data, clicked }) => {
        const onClicked = async () => {
            const res = await Api.get(`/lutin/info/${data.lutin_id}`);
            const routinData = { id: data.lutin_id, content: res.data.data };
            setSelectedRoutin((prevState) => routinData);
        };
        return (
            <ItemContainer clicked={clicked} onClick={onClicked}>
                <h3>{data.lutin_name}</h3>
                <p>{data.lutin_index}</p>
            </ItemContainer>
        );
    };

    const PreviewItem = ({ data }) => {
        return (
            <PreviewItemContainer>
                <h3>{data.name}</h3>
                <p>
                    {data.set}세트 / {data.count}회
                </p>
            </PreviewItemContainer>
        );
    };

    const PreviewItemList = () => {
        if (selectedRoutin.content.length <= 0) {
            return '왼쪽에서 루틴을 선택해주세요.';
        }
        return selectedRoutin.content.map((x, i) => <PreviewItem data={x} key={i} />);
    };

    return (
        <Container animate={{ y: isSelect ? -1000 : 0 }}>
            <RoutinList>{routines ? routines.map((x) => <RoutinItem data={x} clicked={selectedRoutin.id === x.lutin_id} key={x.lutin_id} />) : '불러오는 중...'}</RoutinList>
            <RoutinPreview>
                <PreviewItemList />

                <RoutinButton onClick={onClickButton}>완료</RoutinButton>
            </RoutinPreview>
        </Container>
    );
};

export default SelectedRoutin;
