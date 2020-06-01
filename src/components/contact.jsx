import React, { Component } from 'react';
import { ProjectSection, CenterIconsDiv, ContactInfoDiv, ContactIconsA } from './styled.js';
 
class Contact extends Component {
  state = {

  }
 
  render() {

    return (
      <>
        <ProjectSection className="section">
          <div className="columns">
            <div className="column is-three-fourths">
              <div className="container box">
                <ContactInfoDiv>
                  frank.sundstedt@gmail.com
                </ContactInfoDiv>
                <div>
                    <CenterIconsDiv className="container center-items">
                        <ContactIconsA href="https://linkedin.com/in/frank-sundstedt-0b1065105" target="_blank"><img src={require("../images/icons/LinkedIn-Icon2.png")}></img></ContactIconsA>
                        <ContactIconsA href="https://github.com/fsundstedt/" target="_blank"><img src={require("../images/icons/GitHub-Icon.png")}></img></ContactIconsA>
                    </CenterIconsDiv>
                </div>
              </div>
            </div>
          </div>
        </ProjectSection>
      </>
    );
  }
}

export default Contact;