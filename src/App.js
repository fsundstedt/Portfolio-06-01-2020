import React, { Component } from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import Nav from './components/navbar.jsx';
import Intro from './components/intro.jsx';
import Projects from './components/projects.jsx';
import Contact from './components/contact.jsx';
import { MainBodyDiv, ProjectButtonSection, ProjectButtonStyle } from './components/styled.js';

class App extends Component {
  state = {
    projectsView: false,
    ContactView: false,
  }

  setProjectsView = (e) => {
    e.preventDefault();

    this.setState(prevState => ({
      projectsView: !prevState.projectsView,
    }));
  }

  setContactView = (e) => {
    e.preventDefault();

    this.setState(prevState => ({
      ContactView: !prevState.ContactView,
    }));
  }

  render() {

    let showProjects;
    let showContact;

    if (this.state.projectsView) {
      showProjects = <Projects/>
    } else {
      showProjects = null;
    }

    if (this.state.ContactView) {
      showContact = <Contact/>
    } else {
      showContact = null;
    }

    return (
      <>
        <Nav/>
        <MainBodyDiv>
          <br/>
          <Intro></Intro>
          <section className="section">
              <div className="columns">
                  <div className="column is-three-fourths">
                      <ProjectButtonStyle className="container box" onClick={this.setProjectsView}>
                          Projects
                      </ProjectButtonStyle>
                  </div>
              </div>
          </section>
          <div>
            {showProjects}
          </div>
          <ProjectButtonSection className="section">
              <div className="columns">
                  <div className="column is-three-fourths">
                      <ProjectButtonStyle className="container box" onClick={this.setContactView}>
                          Contact
                      </ProjectButtonStyle>
                  </div>
              </div>
          </ProjectButtonSection>
          <div>
            {showContact}
          </div>
        </MainBodyDiv>
      </>
    )
  }
};

export default App;
