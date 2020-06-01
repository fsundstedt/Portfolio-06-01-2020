import React from 'react';
import { IntroSection, CenterFigure, ProfileImg } from './styled.js';

function Intro() {

    return (
        <>
            <IntroSection className="section">
                <div className="container box">
                    <div className="columns is-vcentered">
                        <div className="column">
                            <CenterFigure>
                                <ProfileImg src={require("../images/icons/Profile-Image.png")} alt="Profile Image"/>
                            </CenterFigure>
                        </div>
                        <div className="column has-text-centered">
                                <div>
                                    <div className="title">
                                        Welcome to my page!
                                    </div>
                                    <div>
                                        My name is Frank Sundstedt, and I'm a software developer.
                                        I'm happiest when I'm developing, building, creating,
                                        concocting, or experimenting. Enjoy my site!
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </IntroSection>
        </>
    )
}

export default Intro;