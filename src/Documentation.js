import React from "react";
import styled from "styled-components";
import TapeLoop from "./tapeloo.gif";
import TapeDiagram from "./diagram.png";
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
  display: block;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MainHeader = styled.div`
  font-family: "Helvetica";
  font-size: 48px;
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

  @media (max-width: 768px) {
    width: 80vw;
  }
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

  a {
    font-weight: bold;
    color: black;
  }

  @media (max-width: 768px) {
    width: 80vw;
  }
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
    padding-top: 27px;
    padding-bottom: 27px;
  }

  @media (max-width: 768px) {
    width: 80vw;
    margin-left: 6vw;
  }
`;

const MainContainer = styled.div`
  background: url(${Background});
  background-size: contain;
  background-repeat: repeat;
  margin: 0 !important;
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
        <NavLink href="https://github.com/samgildea/audible-generative-recursion">
          <a href="https://github.com/samgildea/audible-generative-recursion">
            github repository
          </a>
        </NavLink>
        <NavLink href="#intro">
          <a href="#intro">introduction</a>
        </NavLink>
        <NavLink href="#tech">
          <a href="#tech">technoligies used</a>
        </NavLink>
        <NavLink href="#p5">
          <a href="#p5">visuals with p5.js</a>
        </NavLink>
        <NavLink href="#audio">
          <a href="#audio">audio with tone.js</a>
        </NavLink>
        <NavLink href="#generative">
          <a href="#generative">generative system</a>
        </NavLink>
      </NavBar>

      <TextSection id="intro">
        <Name>Introduction </Name>

        <TextDescription>
          Inspired by Brian Eno’s use of generative techniques to create audio
          and visual compositions, audible generative recursion's goal is to
          create a visual system of animating visuals that generate both
          abstract art and infinite, generative musical compositions.
        </TextDescription>

        <TextDescription>
          Brian Eno used the term "generative music" to describe any music that
          is ever-different and changing, created by a system. Ultimately, the
          visual developed system will be used to create infinite, unique
          compositions of music in addition to the visual designs.
        </TextDescription>
      </TextSection>

      <TextSection id="tech">
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
      <TextSection id="p5">
        <Name>visuals with p5.js </Name>

        <TextDescription>
          <a href="https://p5js.org/">P5.js</a> is a JavaScript library for
          creative coding. For this project I utilized the react framework
          react-p5 in order to incorporate the visuals into the React project
          with all other frameworks.
        </TextDescription>

        <TextDescription>
          P5.js allows us to create visual elements within our javascript code
          and animate and manipulate all visual parameters programmatically.{" "}
          <br /> <br /> <a href="https://p5js.org/">P5.js documentation</a>
        </TextDescription>

        <img src={Example} />

        <TextDescription>
          In addition, p5 has an expansive noise based randomization library
          that allows us to create the generative system in an organic way. All
          the visual elements are randomized and generated using various
          algorithms to satisfy the goal of having infinite, generative visuals.
        </TextDescription>
      </TextSection>
      <TextSection id="audio">
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
          <br />
          <br />
          <a href="https://tonejs.github.io/">tone.js documentation</a>
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
      <TextSection id="generative">
        <Name>generative system </Name>
        <TextDescription>
          There are two main elements of sound generation that are triggered
          based on the visuals. The first element of sound generation is
          triggered by an ellipse simulating a tape loop. When the ellipse
          reaches a circumference of 198.3 pixels, the system will play a note
          randomly based on the scale of the piece.
        </TextDescription>
        <img className="diagram" src={TapeDiagram} />
        <img src={TapeLoop} />
        <TextDescription>
          The second element of sound generation in the system is based on the
          screen width and height of the system. When the randomized noise based
          bezier curve's edge reached the edge of the screen the system will
          also play a note randomly based on the scale of the piece.
        </TextDescription>
        <img src={Generation} />

        <TextDescription>
          Finally, all the visual elements use the perlin noise algorithm to
          change location and color based on the previous positions parameters.
        </TextDescription>
      </TextSection>

      <TextSection>
        <Name> a note on perlin noise </Name>

        <TextDescription>
          In order to generate a more organic randomization with the curves and
          form, instead of using a Javascripts random function, I ultimately
          decided to use Perlin Noise, which is built in to p5.js. Perlin noise
          is a type of gradient noise originally developed by Ken Perlin. By
          utilizing Perlin noise in our generative visual system it provides a
          level of realism and human like quality to our visuals that otherwise
          would look completely random.
          <br />
          <br />
          <a href="https://en.wikipedia.org/wiki/Perlin_noise">
            more on perlin noise
          </a>
        </TextDescription>
      </TextSection>
      <TextSection>
        <Name>sounds made</Name>
        <TextDescription>
          <iframe
            title="embedded tracks"
            width="100%"
            height="450"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1431094465&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>
        </TextDescription>
      </TextSection>
    </MainContainer>
  );
}
