import React, { useState } from 'react';
import styled from 'styled-components';
import { Page } from '../Atomic/Background';
import { Line } from 'react-chartjs-2';

const Card = styled.div`
    position: absolute;
    cursor: pointer;

    width: 600px;
    height: 350px;

    top: 50px;
    left: 40px;

    -webkit-box-shadow: 21px 0px 42px -8px rgba(0, 0, 0, 0.03);
    box-shadow: 21px 0px 42px -8px rgba(0, 0, 0, 0.05);

    background-color: #fcfcfc;

    border: 1.3px solid #e6e6e6;
    border-radius: 20px;

    transition: 0.3s;
    &:hover {
        transform: translateY(-2px) scale(1.01);
        -webkit-box-shadow: 21px 0px 42px -8px rgba(0, 0, 0, 0.1);
        box-shadow: 21px 0px 42px -8px rgba(0, 0, 0, 0.1);
    }
`;

const ProfilePage = () => {
    const data = {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
            {   
                data: [2, 9, 7, 5, 7, 6],
                fill: false,
                // backgroundColor: 'rgb(255, 74, 113, 0.3)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
                tension: 0.4
            },
        ],
    };

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
        layout: {
            padding: {
                top: 20,
                left: 30,
                right: 40,
                bottom: 0
            }
        }
    };

    return (
        <Page>
            <Card>
                <Line data={data} options={options} ></Line>
            </Card>
        </Page>
    );
};

export default ProfilePage;
