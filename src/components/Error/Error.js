import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { useHistory } from "react-router-dom";
import HowToPlayModal from "../LandingScreen/HowToPlayModal";
import FunFactsModal from "../LandingScreen/FunFacts";
import { spinscale } from "../Keyframes";

import { ReactComponent as EarthSvg } from "../../assets/earth.svg";
import { ReactComponent as StarsSvg } from "../../assets/stars.svg";

import UIfx from "uifx";

const Container = styled.div`
  background-image: linear-gradient(#060606, #08345c);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  width: 100vw;
  z-index: -10;
`;

const Title = styled.h1`
background-color: #ff8a00;
  font-family: 'IBM Plex Sans Arabic', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 72px;
  text-align: center;
  line-height: 130px;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  color: transparent;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  margin-bottom: 0;
  position: relative;
  top: 10%;
  z-index: 5;
`;

const TitleBig = styled.h1`
background-color: #ff8a00;
font-family: 'IBM Plex Sans Arabic', sans-serif;
text-align: center;
font-size: 110px;
font-weight: bold;
// -webkit-text-stroke: 1px black;
text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
color: transparent;
-webkit-background-clip: text;
-moz-background-clip: text;
background-clip: text;
margin-block-start: 0em;
margin-block-end: 0em;
z-index: 5;
`;


const Earth = styled.div`
  position: absolute;
  bottom: 0px;
  left: -150px;
  overflow: hidden;
`;

const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100vw;
  justify-content: space-around;
  margin-bottom: 0.5em;
`;

const Stars = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  overflow: hidden;
  animation: ${ spinscale } 4s linear infinite alternate;
`;

const LandingScreen = props => {
  const history = useHistory();

 

  const startGame = () => {
   history.push("/game")
  };

  return (
    
    <Container>
      <Title> قلّل كرّر دوّر</Title>
      <br></br>
      <TitleBig></TitleBig>

    
      <Stars>
        <StarsSvg />
      </Stars>
      <Earth>
        <EarthSvg />
      </Earth>
      <Button
        primary
        type="button"
        renderAs="button"
        handleClick={startGame}
        label="أبدا"
      ></Button>
     
      <ButtonContainer>
        {props.howToPlayModal && (
          <HowToPlayModal
            handleClose={props.hideHowToPlayModal}
          ></HowToPlayModal>
        )}
        {props.funFactsModal && (
          <FunFactsModal handleClose={props.hideFunFactsModal}></FunFactsModal>
        )}
        <Button
          type="button"
          handleClick={props.showHowToPlayModal}
          label="كيفية اللعب"
        ></Button>
        <Button
          type="button"
          handleClick={props.showFunFactsModal}
          label="معلومات عن إعادة التدوير  "
        ></Button>
      </ButtonContainer>
    </Container>
   
    
  );
};

export default LandingScreen;
