import React from 'react';
import { Link } from 'react-router-dom';
import '../style/main.css';

const MainPage = () => {
    return (
        <div className="wrap">
            <div className="link_form">
                <Link to="/login">로그인</Link>
                <Link to="/register">회원가입</Link>
            </div>
            <section>
                <div className="timer_lutin">
                    <div className="txt">
                        <Link to="/exercise">
                            <span>
                                <h2>TIMER & LUTIN</h2>
                            </span>
                        </Link>
                    </div>
                </div>

                <div className="community">
                    <div className="txt">
                        <Link to="/">
                            <span>
                                <h2>COMMUNITY</h2>
                            </span>
                        </Link>
                    </div>
                </div>

                <div className="chart">
                    <div className="txt">
                        <Link to="/">
                            <span>
                                <h2>CHART</h2>
                            </span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MainPage;
