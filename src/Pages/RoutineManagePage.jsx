import React from 'react';
import styled from 'styled-components';
import { Page } from '../Atomic/Background';
import { motion } from 'framer-motion';
import { MyRoutines } from '../Compnents/Routins/MyRoutines';
import { FavoriteRoutines } from '../Compnents/Routins/FavoriteRoutines';

const Container = styled(motion.div)`
    position: absolute;
    z-index: 20;

    width: 90%;
    height: 100%;

    display: flex;
    justify-content: space-around;


    top: 0;
    left: 60px;
`;

const RoutineMangePage = () => {
    return (
        <Page>
            <Container>
                <MyRoutines />
                <FavoriteRoutines />
            </Container>
        </Page>
    );
};

export default RoutineMangePage;
