import styled from "styled-components";

export const MainBodyDiv = styled.div`
    min-height: 94.5vh;
    background-color: #e8e8e8;
`;

export const NavbarPosition = styled.div`
    width: 100%;
    max-height: 44px;
`;

export const NavbarNav = styled.nav`
    max-height: 44px;
`;

export const NavbarItem = styled.div`
    text-align: center;
    font-weight: bold;
    padding: 10px;
`;

export const CenterDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const IntroSection = styled.section`
    padding-top: 0px;
    padding-bottom: 2px;
`;

export const ProjectSection = styled.section`
    padding-top: 0px;
    padding-bottom: 0px;
`;

export const ProjectButtonSection = styled.section`
    padding-top: 0px;
    padding-bottom: 0px;
`;

export const ProjectButtonStyle = styled.button`
    width: 100%;
    border: 0px;
    font-size: 1.5em;
    font-weight: bold;
    outline: none;
    border: 2px solid;
    border-color: #CECECE;
    background-color: #CECECE;
    &:hover {
        background-color: white;
    }
    &:active {
        border-color: #b0b0b0;
    }
`;

export const CenterA = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    &:hover {
        background: #e8e8e8;
        color: #363636;
    }
`;

export const CenterFigure = styled.figure`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ProfileImg = styled.img`
    max-width: 300px;
    padding: 5px;
    border: 1px solid #ccc;
`;

export const IntroMaxWidth = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 800px;
    padding: 2%;
`;

export const Project1Image = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 60%;
    margin-left: 20%;
    margin-right: 20%;
    border: 1px solid;
    border-color: rgba(0, 0, 0, 0.25);
    border-radius: 4px;
`;

export const Project2Image = styled.figure`
    height: 100px;
    height: 500px;
`;

export const CenterIconsDiv = styled.div`
    display: block;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export const IconsA = styled.a`

`;

export const ContactIconsA = styled.a`
    padding: 20px;
`;

export const ContactInfoDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 1.25em;
    font-weight: bold;
    padding-bottom: 15px;
`;