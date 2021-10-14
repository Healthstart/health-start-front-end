import React, { useState } from 'react';
import styled from 'styled-components';
import { Heading3 } from '../../Atomic/Heading';
import { Eye } from 'react-feather';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import toast from 'react-hot-toast';
import RoutinInfoModal from '../Modal/RoutinInfoModal';
import Api from '../../Api';

const Container = styled.div`
    display: flex;
    position: relative;
    background-color: #eee;
    padding: 2rem;
    width: 100%;
    height: 350px;

    border-radius: 15px;
    box-shadow: 2px 2px 5px #babecc, -5px -5px 10px #ffffff;
    user-select: none;
`;

const Content = styled.div`
    width: 65%;
    height: 100%;
    border-right: 3px solid gray;
`;

const List = styled.ul`
    width: 35%;
    height: 100%;
    padding: 1rem 2rem;
    list-style: none;
`;

const ListItemText = styled.span`
    cursor: pointer;

    &:hover {
        font-weight: bold;
        text-decoration: underline;
    }
`;

const StyledEye = styled(Eye)`
    opacity: 0.6;
    transform: translateY(0.4rem) scale(0.8);
    margin-right: 0.15rem;
`;

const ViewCountNum = styled.span`
    font-size: 0.8rem;
    opacity: 0.6;
`;

const SlideContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 2rem 4rem 0 2rem;
`;

const SlideItemContainer = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: column;
    text-align: center;

    & > h3 {
        font-weight: bold;
    }
    & > div {
        margin-top: 0.6rem;
    }
    & > div:last-child {
        cursor: pointer;
    }
    & > div:last-child:hover {
        font-weight: bold;
    }
`;

const InfoText = styled.span`
    position: absolute;
    font-size: 0.9rem;
    top: ${(props) => props.top}rem;
    left: ${(props) => props.left}rem;
    bottom: ${(props) => props.bottom}rem;
    right: ${(props) => props.right}rem;

    transition: transform 0.3s ease-in-out;
    opacity: ${(props) => (props.active ? 0.8 : 0.6)};
    transform: ${(props) => (props.active ? 'scale(1.05)' : 'scale(1)')};

    &:hover {
        opacity: 0.8;
    }
`;

const MoreItem = styled.span`
    cursor: pointer;

    &:hover {
        font-weight: bold;
        text-decoration: underline;
    }
`;

const Preview = ({ routins, title }) => {
    const [isActive, setIsActive] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [propState, setPropState] = useState(null);

    const fetchData = async (id, lutin_name, lutin_index) => {
        const data = await Api.get(`/lutin/info/${id}`);
        setPropState((prevState) => ({ lutin_name, lutin_index, content: data.data.data }));
    };

    const closeModal = () => {
        setIsOpen((prevState) => false);
        setPropState((prevState) => null);
    };

    const onClick = async (id, lutin_name, lutin_index) => {
        await fetchData(id, lutin_name, lutin_index);
        setIsOpen((prevState) => true);
    };

    const ListItem = ({ data }) => {
        const { lutin_name, lutin_index, view_count, lutin_id } = data;

        const ViewCount = ({ viewCount }) => {
            return (
                <>
                    <StyledEye />
                    <ViewCountNum>{viewCount}</ViewCountNum>
                </>
            );
        };

        return (
            <div>
                <ListItemText onClick={() => onClick(lutin_id, lutin_name, lutin_index)}>{lutin_name}</ListItemText> <ViewCount viewCount={view_count} />
            </div>
        );
    };

    const SlideItem = ({ data }) => {
        const { lutin_name, lutin_index, view_count, lutin_id } = data;
        return (
            <SlideItemContainer>
                <Heading3>{lutin_name}</Heading3>
                <div>{lutin_index}</div>
                <div>조회수: {view_count}</div>
                <div onClick={() => onClick(lutin_id, lutin_name, lutin_index)}>자세히 보기</div>
            </SlideItemContainer>
        );
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '0px',
    };

    return (
        <Container>
            <Content>
                <Heading3>{title}</Heading3>
                <SlideContainer>
                    <Slider {...settings}>
                        {routins.map((x, i) => (
                            <SlideItem data={x} key={x.lutin_id} />
                        ))}
                    </Slider>
                </SlideContainer>
            </Content>
            <List>
                {routins.map((x, i) => (
                    <ListItem data={x} key={x.lutin_id} />
                ))}
                <MoreItem
                    onClick={() => toast('더 많은 정보를 얻으려면 로그인하세요!', { duration: 2500 })}
                    onMouseEnter={() => setIsActive((prevState) => true)}
                    onMouseLeave={() => setIsActive((prevState) => false)}
                >
                    ...
                </MoreItem>
            </List>
            <InfoText active={isActive} bottom={1} left={1.5}>
                더 많은 정보를 얻고 싶다면 로그인하세요!
            </InfoText>
            <InfoText bottom={1} right={1.5}>
                불러온 상위 {title}: {routins.length}개
            </InfoText>

            <RoutinInfoModal isOpen={isOpen} reqClose={closeModal} data={propState} />
        </Container>
    );
};

export default Preview;
