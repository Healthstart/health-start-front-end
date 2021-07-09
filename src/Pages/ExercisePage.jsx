import React from 'react';
import { Link } from 'react-router-dom';
import '../style/exercise.css';
import pre_exercise from '../Image/previous_exercise.png';
import main_exercise from '../Image/main_exercise.png';
import next_exercise from '../Image/next_exercise.png';
import Home from '../Image/home.png';

const ExercisePage = () => {
    return (
        <div className="wrap">
            <div className="content">
                <header>
                    <Link to="/">
                        <button className="home">
                            <img src={Home} alt="home" />
                        </button>
                    </Link>
                    <div className="timer">
                        <Link to="/exercise"> 00:00:00 </Link>
                    </div>
                </header>
                <div className="main">
                    <div className="exercise">
                        <Link to="/exercise">
                            <img src={pre_exercise} alt="img1" className="previous_exercise" />
                        </Link>
                        <Link to="/exercise">
                            <img src={main_exercise} alt="img2" className="main_exercise" />
                        </Link>
                        <Link to="/exercise">
                            <img src={next_exercise} alt="img3" className="next_exercise" />
                        </Link>
                    </div>
                    <div className="button">
                        <button className="back">back</button>
                        <button className="next">next</button>
                    </div>
                </div>
                <footer>
                    <div className="end_timer">
                        <Link to="/exercise">
                            <h2>00:00:00</h2>
                        </Link>
                    </div>
                    <div className="exit">
                        <button className="finish">종료</button>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default ExercisePage;
