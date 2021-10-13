import React from 'react';
import styled, { keyframes } from 'styled-components';
import Modal from 'react-modal';

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
    border-radius: 5px;
    background-color: #eee;
    outline: none;

    animation: ${OpenModalAnimate} 2s ease-out;
`;

const ItemListContainer = styled.div`
    display: flex;
`;

const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    width: 150px;
    height: 150px;
    border-radius: 8px;
    box-shadow: 2px 2px 5px #babecc, -5px -5px 10px #ffffff;
    padding: 1rem;
    margin-top: 2rem;
    margin-right: 1.5rem;
    text-align: center;

    transition: transform 0.4s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
    &:last-child {
        margin-right: 0;
    }
`;

const Title = styled.div`
    padding-bottom: 1rem;
    border-bottom: 1px solid black;
`;

const RoutinInfoModal = ({ isOpen, reqClose, data }) => {
    const ContentList = data
        ? data.content.map((x) => (
              <ItemContainer>
                  <Title>{x.name}</Title>
                  <div>
                      <div>{x.set}세트</div>
                      <div>세트 당{x.count}회</div>
                  </div>
              </ItemContainer>
          ))
        : 'Loading...';

    return (
        <ModalContainer
            isOpen={isOpen}
            onRequestClose={reqClose}
            style={{
                overlay: {
                    backgroundColor: 'rgba(0,0,0, 0.4)',
                    cursor: 'pointer',
                },
                content: {
                    cursor: 'initial',
                },
            }}
            ariaHideApp={false}
        >
            <div>{data ? data.lutin_name : 'Loading...'}</div>
            <div>{data ? data.lutin_index : 'Loading...'}</div>
            <ItemListContainer>{ContentList}</ItemListContainer>
        </ModalContainer>
    );
};

export default RoutinInfoModal;
