import React from 'react';
import { ProjectSection, Project1Image, CenterDiv, CenterIconsDiv, IconsA } from './styled.js';

export default function Projects() {
    return(
        <>
<ProjectSection className="section">
        <div className="columns">
            <div className="column is-three-fourths">
                <div className="container box">
                    <h2 className="title is-3 has-text-centered">AppTrack</h2>
                    <div>
                        <p className="is-italic has-text-centered">
                            AppTrack is a way for you to keep up with the jobs you have applied for. In addition to keeping track, we let you give feedback about the interview experience. 
                            For example: was there whiteboarding or a code challenge? Was the interview easy or difficult? We let you provide us with details on your experience to help others.
                            <br />
                            <br />
                            Once a user is signed up to use the service, they can review the history of other users job applications and interviews as well as input their own applications and 
                            interviews. Not only does this make keeping up with where you have applied easier, it also gives you access to information from others. It is a great way to manage your
                            applications and interviews and keep track of whom to contact at the companies you have interviewed with.
                        </p>
                        <br/>
                    </div>
                    <div>
                        <CenterIconsDiv className="container center-items">
                            <IconsA href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"><img src={require("../images/icons/Javascript-Icon.png")}></img></IconsA>
                            <IconsA href="https://reactjs.org/" target="_blank"><img src={require("../images/icons/React-Icon.png")}></img></IconsA>
                            <IconsA href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target="_blank"><img src={require("../images/icons/HTML5-Icon.png")}></img></IconsA>
                            <IconsA href="https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade" target="_blank"><img src={require("../images/icons/CSS3-Icon.png")}></img></IconsA>
                            <IconsA href="https://www.postgresql.org/" target="_blank"><img src={require("../images/icons/postgreSQL-Icon.png")}></img></IconsA>
                            <IconsA href="https://nodejs.org/en/" target="_blank"><img src={require("../images/icons/node-Icon.png")}></img></IconsA>
                        </CenterIconsDiv>
                    </div>
                    <br/>
                    <div className="columns">
                        <div className="column">
                            <Project1Image className="image">
                                <img src={require("../images/projects/Capstone-Screenshot2.gif")} alt="Project Image"/>
                            </Project1Image>
                        </div>
                        <div className="column">
                            <div className="title is-4 has-text-centered">
                                Technical Features
                            </div>
                            <div className="content">
                                <ul>
                                    <li>Front end built with React framework</li>
                                    <li>Back end built with Express, pg-promise, and PostgreSQL</li>
                                    <li>Utilizes both class-based and functional components</li>
                                    <li>Designed with React styled components</li>
                                    <li>Uses bcrypt for password processing</li>
                                </ul>
                                    <div className="button title is-4 has-text-centered">
                                        <a href="https://app-track.netlify.app/" target="_blank">
                                            Take a Look
                                        </a>
                                    </div>
                                <figure className="image is-64x64">
                                    <a href="https://github.com/fsundstedt/App-Track" target="_blank"><img src={require("../images/icons/GitHub-Icon.png")} alt="GitHub Icon"/></a>
                                </figure>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="container box">
                    <h2 className="title is-3 has-text-centered">Amortization Calculator</h2>
                    <div>
                        <p className="is-italic has-text-centered">
                            Amortization Calculator does just that: calculates and displays amortization schedules, as well as some relevant metrics such as total interest paid,
                            monthly payment, and more. Users simply input their principal, rate, and term (in months; rate will be compounded monthly) in the appropriate boxes, click the
                            "Show Amortization Schedule" button, and scroll through the generated schedule of payments.
                        </p>
                        <br/>
                    </div>
                    <div className="container center-items">
                        <CenterIconsDiv className="container center-items">
                            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"><img src={require("../images/icons/Javascript-Icon.png")}></img></a>
                            <a href="https://reactjs.org/" target="_blank"><img src={require("../images/icons/React-Icon.png")}></img></a>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target="_blank"><img src={require("../images/icons/HTML5-Icon.png")}></img></a>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade" target="_blank"><img src={require("../images/icons/CSS3-Icon.png")}></img></a>
                            <a href="https://nodejs.org/en/" target="_blank"><img src={require("../images/icons/node-Icon.png")}></img></a>
                        </CenterIconsDiv>
                    </div>
                    <br/>
                    <div className="columns">
                        <div className="column">
                            <Project1Image className="image">
                                <img src={require("../images/projects/Amort-Screenshot.png")} alt="Project Image"/>
                            </Project1Image>
                        </div>
                        <div className="column">
                            <div className="title is-4 has-text-centered">
                                Technical Features
                            </div>
                            <div className="content">
                                <ul>
                                    <li>Built with React framework</li>
                                    <li>Utilizes both class-based and functional components</li>
                                    <li>Designed with React styled components</li>
                                </ul>
                                <figure className="image is-64x64">
                                    <a href="https://github.com/fsundstedt/amort-calculator-04-13-2020" target="_blank"><img src={require("../images/icons/GitHub-Icon.png")} alt="Project Image"/></a>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container box">
                    <h2 className="title is-3 has-text-centered">PokéFind</h2>
                    <div>
                        <p className="is-italic has-text-centered">
                            Pokéfind is an application that provides statistics on every Pokemon character to date.
                            It utilizes a search bar and has the option to randomly select a character.
                        </p>
                        <br/>
                    </div>
                    <div className="container center-items">
                        <CenterIconsDiv className="container center-items">
                            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"><img src={require("../images/icons/Javascript-Icon.png")}></img></a>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target="_blank"><img src={require("../images/icons/HTML5-Icon.png")}></img></a>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade" target="_blank"><img src={require("../images/icons/CSS3-Icon.png")}></img></a>
                            <a href="https://nodejs.org/en/" target="_blank"><img src={require("../images/icons/node-Icon.png")}></img></a>
                        </CenterIconsDiv>
                    </div>
                    <br/>
                    <div className="columns">
                        <div className="column">
                            <Project1Image className="image">
                                <img src={require("../images/projects/FE-Screenshot.gif")} alt="Project Image"/>
                            </Project1Image>
                        </div>
                        <div className="column">
                            <div className="title is-4 has-text-centered">
                                Technical Features
                            </div>
                            <div className="content">
                                <ul>
                                    <li>Uses JavaScript Fetch functionality to manage responses</li>
                                    <li>Connects to the PokéAPI site through multiple channels</li>
                                    <li>Utilizes jQuery for DOM manipulation</li>
                                    <li>Designed with Bootstrap framework</li>
                                </ul>
                                <figure className="image is-64x64">
                                    <a href="https://github.com/fsundstedt/Pokefind" target="_blank"><img src={require("../images/icons/GitHub-Icon.png")} alt="Project Image"/></a>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container box">
                    <h2 className="title is-3 has-text-centered">Llamarita</h2>
                    <div>
                        <p className="is-italic has-text-centered">
                            Llamarita is a game built using the Pygame library. Players move the character around the platform
                            in order to avoid falling cacti and collect Margaritas to win, each of which increases the number of falling cacti.
                            Tacos are collected as bonus points.
                        </p>
                        <br/>
                    </div>
                    <div className="container center-items">
                        <CenterIconsDiv className="container center-items">
                            <a href="https://www.python.org/" target="_blank"><img src={require("../images/icons/Python-Icon.png")}></img></a>
                        </CenterIconsDiv>
                    </div>
                    <br/>
                    <div className="columns">
                        <div className="column">
                            <Project1Image className="image">
                                <img src={require("../images/projects/Llama-Screenshot.png")} alt="Project Image"/>
                            </Project1Image>
                        </div>
                        <div className="column">
                            <div className="title is-4 has-text-centered">
                                Technical Features
                            </div>
                            <div className="content">
                                <ul>
                                    <li>Built with Python and utilizes the Pygame library</li>
                                    <li>Difficulty increases as score increases</li>
                                    <li>Features audio track and sound effects</li>
                                </ul>
                                <figure className="image is-64x64">
                                    <a href="https://github.com/fsundstedt/Llamarita-Imbibe-The-Tacoing" target="_blank"><img src={require("../images/icons/GitHub-Icon.png")} alt="Project Image"/></a>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ProjectSection>
        </>
    )
}