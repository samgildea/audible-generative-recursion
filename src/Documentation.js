import React from "react";
import styled from "styled-components";
import TapeLoop from "./tapeloo.gif";
import TapeDiagram from "./tapeloop.png";
import Generation from "./generativesystem.png";
import Background from "./background.png";
import Example from "./p5.png";
const NavBar = styled.div`
  margin-left: 5vw;
  position: fixed;
  top: 0;
  width: 27vw;
  border-right: solid;
  height: 100vh;
`;

export const MainHeader = styled.div`
  font-family: "Helvetica";
  font-size: 60px;
  font-weight: bold;
  width: 27vw;
  padding-top: 27px;
`;

export const SubHeader = styled.div`
  font-family: "Helvetica";
  font-size: 24px;
  width: 22vw;
  padding-top: 27px;
`;

export const Name = styled.div`
  font-family: "Helvetica";
  font-weight: bold;
  font-size: 24px;
  width: 27vw;
  padding-top: 27px;
`;

export const NavLink = styled.div`
  padding-top: 27px;

  a {
    font-family: "Helvetica";
    font-weight: bold;
    font-size: 24px;
    padding-top: 27px;
    text-decoration: underline;
    color: black;
  }
`;

export const TextDescription = styled.div`
  font-family: "Helvetica";
  font-size: 24px;
  width: 22vw;
  padding-top: 27px;
  width: 42vw;
`;

export const TextSection = styled.div`
  margin-left: 43vw;
  padding-top: 64px;
  padding-bottom: 27px;
  border-bottom: solid;
  width: 42vw;

  img {
    width: 42vw;
    margin-top: 16px;
  }
`;

const MainContainer = styled.div`
  background: url(${Background}) repeat;
  background-position: top;
`;

export default function Documentation() {
  return (
    <MainContainer>
      <NavBar>
        <MainHeader>Audible Generative Recursion</MainHeader>
        <SubHeader>
          creating generative music and art with p5.js, tone.js and react.js
        </SubHeader>

        <Name>Sam Gildea</Name>
        <SubHeader>
          design degree project <br />
          northeastern university
        </SubHeader>

        <NavLink href="/">
          <a href="/">introduction</a>
        </NavLink>
        <NavLink href="/">
          <a href="/">technoligies used</a>
        </NavLink>
        <NavLink href="/">
          <a href="/">visuals with p5.js</a>
        </NavLink>
        <NavLink href="/">
          <a href="/">audio with tone.js</a>
        </NavLink>
        <NavLink href="/">
          <a href="/">generative system</a>
        </NavLink>
      </NavBar>

      <TextSection>
        <Name>Introduction </Name>

        <TextDescription>
          Inspired by Brian Eno’s use of generative techniques to create audio
          and visual compositions, The project of audible generative recursion
          is to create a visual system of animating visuals that generate both
          abstract art and infinite, generative musical compositions.
        </TextDescription>

        <TextDescription>
          Brian Eno used the term "generative music" to describe any music that
          is ever-different and changing, created by a system. Ultimately, the
          visual developed system will be used to create infinite, unique
          compositions of music in addition to the visual designs.
        </TextDescription>
      </TextSection>

      <TextSection>
        <Name>technoligies used </Name>

        <TextDescription>
          To create the overall visual framework, all visual aspects of this
          project will be generated using the processing language framework
          p5.js.
        </TextDescription>

        <TextDescription>
          In addition, all audible components of the project will be generated
          using the Javascript synthesis engine framework Tone.js.
        </TextDescription>

        <TextDescription>
          Finally, to further connect these two technologies and make a web
          application, React.js was used to import these frameworks and create
          UI components.{" "}
        </TextDescription>
      </TextSection>
      <TextSection>
        <Name>visuals with p5.js </Name>

        <TextDescription>
          P5.js is a JavaScript library for creative coding. For this project I
          utilized the react framework react-p5 in order to incorporate the
          visuals into the React project with all other frameworks.
        </TextDescription>

        <TextDescription>
          In addition, all audible components of the project will be generated
          using the Javascript synthesis engine framework Tone.js.
        </TextDescription>

        <TextDescription>
          Finally, to further connect these two technologies and make a web
          application, React.js was used to import these frameworks and create
          UI components.{" "}
        </TextDescription>

        <img src={Example} />
      </TextSection>
      <TextSection>
        <Name>audio with tone.js </Name>

        <TextDescription>
          All audible components of this project are synthesized using the
          tone.js framework and triggered by the generative visuals created with
          p5.js.
        </TextDescription>

        <TextDescription>
          Tone.js is a Web Audio framework for creating interactive music in the
          browser. Utilizing the built-in synthesizer engine it allows us to
          create tones triggered from the generative system we create. Tone.js
          allows to add reverb, delay and pitch to create a musical system.
        </TextDescription>

        <code>
          <br />
          <br />
          //create a synth and connect it to the main output (your speakers){" "}
          <br />
          const synth = new Tone.Synth().toDestination(); <br />
          <br /> //play a middle 'C' for the duration of an 8th note <br />{" "}
          synth.triggerAttackRelease("C4", "8n");
        </code>
      </TextSection>
      <TextSection>
        <Name>generative system </Name>
        <TextDescription>
          There are two main elements of sound generation that are triggered
          based on the visuals. The first element of a note playing is triggered
          by an ellipse simulating a tape loop. When the ellipse reaches a
          circumference of 198.3 pixels, the system will play a note.
        </TextDescription>
        <img className="diagram" src={TapeDiagram} />
        <img src={TapeLoop} />
        <TextDescription>
          The second element of sound generation in the system is based on the
          screen width and height of the generation. When the randomized noise
          based bezier curve's edge reached the edge of the screen the system
          will also play a note.
        </TextDescription>
        <img src={Generation} />
      </TextSection>
    </MainContainer>
  );
}
