import React, { useState, useEffect } from "react";
import Sketch from "react-p5";
import * as Tone from "tone";
import Grain from "./grain.png";
import styled from "styled-components";

const NoteText = styled.div`
  position: absolute;
  top: 50%;
  font-size: 50px;
`;

function Remix2() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [startingPostion, setStartingPosition] = useState({ x: 0, y: 0 });
  const reverb = new Tone.Reverb(0.8).toDestination();
  const pingPong = new Tone.PingPongDelay("4n", 0.8).toDestination();
  const synth = new Tone.AMSynth().chain(reverb, pingPong);



  function playNote(note) {

    synth.triggerAttackRelease(`${note}`, "8n");
  }
  let noteText = "";
  const updateText = () => (noteText = noteText + 1);



  const charm = ["C4", "D4", "D#4", "F4", "G4", "G#4", "B4", "C5"];
  const cmajor = ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"];

  useEffect(() => {
    // Tone.start();

    update();
  });

  const update = () => {
    setWindowHeight(window.innerHeight);
    setWindowWidth(window.innerWidth);
  };
  let t;
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(windowWidth, windowHeight).parent(canvasParentRef);
    p5.stroke(0, 18);
    p5.noFill();
    p5.frameRate(60);
    t = 0;
    // setStartingPosition({
    //   x: Math.random() * windowWidth,
    //   y: Math.random() * windowHeight,
    // });
  };

  function windowResized(p5) {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  }
  var x = 0;

  let p1 = { x: -200, y: 175, z: 0 };
  let p2 = { x: -200, y: 25, z: 0 };
  let p3 = { x: 150, y: 25, z: 0 };
  let p4 = { x: 275, y: 175, z: 0 };
  let x1 = 0;
  let x2 = 85;
  let y1 = 0;
  let y2 = 75;

  let startingPoint = 50;
  let bValue = 145;
  let colorIncrement = 0.5;
  let startX = startingPostion.x;
  let startY = startingPostion.y;
  let speed = 10;
  let speedY = 5;
  let size = 65;
  let size2 = 50;
  let size3 = 50;
  let size4 = 50;

  let sizeIncrement = 1;
  let sizeIncrement2 = 1;
  let sizeIncrement3 = 1;
  let sizeIncrement4 = 1;

  let note1 = "";
  let note2 = "";
  let note3 = "";
  let note4 = "";

  const draw = (p5) => {
    p5.background(183, 9, 76, 1);
    // p5.strokeWeight(p5.mouseX/50);

    p5.noFill();
    p5.stroke(0, bValue, 173, 100);
    p5.fill("black");

    p5.rect(windowWidth / 4 - 50, windowWidth / 4 - 300, 100, 50);
    p5.textSize(32);
    p5.fill("red");
    p5.text(`${note1}`, windowWidth / 4 - 50, windowWidth / 4 - 275);
    p5.noFill();

    p5.ellipse(windowWidth / 4, windowWidth / 4, size);
    p5.stroke(0, bValue + 25, 173, 100);
    p5.fill("black");
    p5.rect(windowWidth / 4 + 200, windowWidth / 4 - 300, 100, 50);
    p5.textSize(32);
    p5.fill("red");
    p5.text(`${note2}`, windowWidth / 4 + 200, windowWidth / 4 - 275);
    p5.noFill();
    p5.ellipse(windowWidth / 4 + 250, windowWidth / 4, size2);
    p5.stroke(0, bValue + 75, 173, 100);
    p5.fill("black");
    p5.rect(windowWidth / 4 + 450, windowWidth / 4 - 300, 100, 50);
    p5.textSize(32);
    p5.fill("red");
    p5.text(`${note3}`, windowWidth / 4 + 450, windowWidth / 4 - 275);
    p5.noFill();

    p5.ellipse(windowWidth / 4 + 500, windowWidth / 4, size3);
    p5.stroke(0, bValue + 100, 173, 100);

    p5.noFill();

    p5.fill("black");
    p5.rect(windowWidth / 4 + 700, windowWidth / 4 - 300, 100, 50);
    p5.textSize(32);
    p5.fill("red");
    p5.text(`${note4}`, windowWidth / 4 + 700, windowWidth / 4 - 275);
    p5.noFill();

    p5.ellipse(windowWidth / 4 + 750, windowWidth / 4, size4);

    if (size > 198.7) {
      sizeIncrement *= -1;
      note1 = cmajor[Math.floor(Math.random() * charm.length)];
      playNote(note1);

    }

    if (size < 50) {
      sizeIncrement *= -1;
    }

    if (size2 > 204.4) {
      sizeIncrement2 *= -1;
      note2 = cmajor[Math.floor(Math.random() * charm.length)];
      playNote(note2);
    }

    if (size2 < 50) {
      sizeIncrement2 *= -1;
    }

    if (size3 > 223.2) {
      sizeIncrement3 *= -1;
      note3 = cmajor[Math.floor(Math.random() * charm.length)];
      playNote(note3);

    }

    if (size3 < 50) {
      sizeIncrement3 *= -1;
    }

    if (size4 > 302.3) {
      sizeIncrement4 *= -1;
      note4 = cmajor[Math.floor(Math.random() * charm.length)];
      playNote(note4);

    }

    if (size4 < 50) {
      sizeIncrement4 *= -1;
    }

    size += sizeIncrement;
    size2 += sizeIncrement2;
    size3 += sizeIncrement3;
    size4 += sizeIncrement4;

    // p5.ellipse(x2, y2, 50);
    // p5.ellipse(x3, y3, 50);

    bValue += colorIncrement;

    startX += speed;
    startY += speedY;

    if (bValue > 255) {
      colorIncrement *= -1;
    } else if (bValue < 0) {
      colorIncrement *= -1;
    }

    if (startX > windowWidth || startX < 0) {
      // p5.ellipse(
      //   windowWidth * Math.random(),
      //   windowWidth * Math.random(),
      //   Math.random() * 115
      // );
      noteText = charm[Math.floor(Math.random() * charm.length)];

      speed *= -1;
      updateText();
    }

    if (startY > windowHeight || startY < 0) {
      speedY *= -1;
      noteText = charm[Math.floor(Math.random() * charm.length)];

      // setNoteText(charm[0]);

      // p5.fill(230, 109, 54, 255);
      // p5.ellipse(
      //   windowWidth * Math.random(),
      //   windowWidth * Math.random(),
      //   Math.random() * 115
      // );

      // playNote()
    }
    p5.noFill();

    t += 0.002;
  };

  return (
    <div>
      <button onClick={() => Tone.start()}>start</button>

      <NoteText>{`${noteText}`}</NoteText>
      {console.log(noteText)}
      <Sketch setup={setup} draw={draw} />
    </div>
  );
}

export default Remix2;
