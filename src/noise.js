import React, { useState, useEffect } from "react";
import Sketch from "react-p5";
import * as Tone from "tone";
import Grain from "./grain.png";
import styled from "styled-components";

function Noise() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  const [startingPostion, setStartingPosition] = useState({ x: 0, y: 0 });

  let audio = false;
  let noteText = "";
  const updateText = () => (noteText = noteText + 1);

  const reverb = new Tone.Reverb(0.8).toDestination();
  const reverb2 = new Tone.Reverb(0.8).toDestination();

  const pingPong = new Tone.PingPongDelay("4n", 0.6).toDestination();
  // const synth = new Tone.AMSynth().chain(reverb, pingPong, reverb2);
  const synth = new Tone.MonoSynth().chain(reverb, pingPong, reverb2);
  // synth.oscillator.type = "square";
  function playNote(note) {
    synth.triggerAttackRelease(`${note}`, "8n");
  }

  function playLongNote(note) {
    synth.triggerAttackRelease(`${note}`, "1m");
  }
  const charm = ["C4", "D4", "D#4", "F4", "G4", "G#4", "B4", "C5"];
  const cmajor = ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"];

  useEffect(() => {
    update();
  });

  const update = () => {
    setWindowHeight(window.innerHeight);
    setWindowWidth(window.innerWidth);
  };
  let t;
  let xoff = 0.0;

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
  let speed = 20;
  let speedY = 2;
  let note1 = "";

  let size = 65;
  let size2 = 50;
  let size3 = 50;
  let size4 = 50;

  let sizeIncrement = 1;
  let sizeIncrement2 = 1;
  let sizeIncrement3 = 1;
  let sizeIncrement4 = 1;

  const draw = (p5) => {
    let n = 3;
    p5.background(
      36 * p5.noise(t + 1),
      22 * p5.noise(t + 1),
      35 * p5.noise(t + 1),
      50 * p5.noise(t + 1)
    );

    for (let x = 0; x < p5.width; x += 50) {
      for (let y = 0; y < p5.height; y += 50) {
        p5.noStroke();
        p5.fill(
          199 * p5.noise(0.01 * startX, 0.01 * y),
          239 * p5.noise(0.01 * x, 0.01 * p5.mouseY),
          0 * p5.noise(0.01 * x, 0.01 * startY),
          5
        );

        if (
          x < startX + 10 &&
          x > startX - 10 &&
          y > startY - 10 &&
          y < startY + 10
        ) {
          p5.fill(
            199 * p5.noise(0.01 * startX, 0.01 * y),
            239 * p5.noise(0.01 * x, 0.01 * p5.mouseY),
            0 * p5.noise(0.01 * x, 0.01 * startY),
            15
          );
          p5.ellipse(x, y, 50, 50);
        } else {
          p5.fill(
            199 * p5.noise(0.01 * startX, 0.01 * y),
            239 * p5.noise(0.01 * x, 0.01 * p5.mouseY),
            0 * p5.noise(0.01 * x, 0.01 * startY),
            5
          );
          p5.rect(x, y, 50, 50);
        }
      }
    }

    for (let x = 0; x < p5.width; x += 25) {
      for (let y = 0; y < p5.height; y += 25) {
        p5.noStroke();
        p5.fill(
          199 * p5.noise(0.01 * p5.mouseX, 0.01 * y),
          239 * p5.noise(0.01 * x, 0.01 * p5.mouseY),
          0 * p5.noise(0.01 * x, 0.01 * startY),
          5
        );

        if (
          x < startX + 10 &&
          x > startX - 10 &&
          y > startY - 10 &&
          y < startY + 10
        ) {
          p5.noStroke();

          p5.fill(
            199 * p5.noise(0.01 * startX, 0.01 * y),
            239 * p5.noise(0.01 * x, 0.01 * p5.mouseY),
            0 * p5.noise(0.01 * x, 0.01 * startY),
            255
          );
          p5.ellipse(x, y, 50, 50);
        } else {
          p5.noStroke();

          p5.fill(
            199 * p5.noise(0.01 * startX, 0.01 * y),
            239 * p5.noise(0.01 * x, 0.01 * p5.mouseY),
            0 * p5.noise(0.01 * x, 0.01 * startY),
            5
          );
          p5.rect(x, y, 50, 50);
        }
      }
    }

    let noiseWidth = 1;
    var x1 = startX;
    var x2 =
      p5.mouseX *
      noiseWidth *
      p5.noise(windowWidth + t + 10, windowHeight + t + 10);
    var x3 =
      p5.mouseX *
      noiseWidth *
      p5.noise(windowWidth + t + 20, windowHeight + t + 20);
    var x4 =
      windowWidth *
      noiseWidth *
      p5.noise(windowWidth + t + 30, windowHeight + t + 30);
    var y1 = startY;
    var y2 = windowHeight * noiseWidth * p5.noise(t + 100);
    var y3 = windowHeight * noiseWidth * p5.noise(t + 200);
    var y4 = windowHeight * noiseWidth * p5.noise(t + 300);

    var r = 199 * p5.noise(t + 10);
    var g = 239 * p5.noise(t + 15);
    var b = 0 * p5.noise(t + 20);
    p5.stroke(
      199 * p5.noise(0.01 * startX, 0.01 * y2),
      239 * p5.noise(0.01 * x1, 0.01 * p5.mouseY),
      0 * p5.noise(0.01 * x1, 0.01 * startY),
      45
    );
    p5.strokeWeight(n);
    p5.noFill();
    p5.strokeWeight(25);

    p5.bezier(x1, y1, x2, y2, x3, y3, x4, y4);
    p5.ellipse(x2, y2, size);

    bValue += colorIncrement;

    startX += speed;
    startY += speedY;

    xoff = xoff + 0.5;

    if (bValue > 255) {
      colorIncrement *= -1;
    } else if (bValue < 0) {
      colorIncrement *= -1;
    }

    if (startX > windowWidth || startX < 0) {
      noteText = charm[Math.floor(Math.random() * charm.length)];
      note1 = cmajor[Math.floor(Math.random() * charm.length)];
      audio && playNote(note1);
      speed *= -1;
    }

    if (startY > windowHeight || startY < 0) {
      speedY *= -1;
      noteText = charm[Math.floor(Math.random() * charm.length)];
      note1 = cmajor[Math.floor(Math.random() * charm.length)];
      audio && playNote(note1);

      // setNoteText(charm[0]);

      // p5.fill(230, 109, 54, 255);
      // p5.ellipse(
      //   windowWidth * Math.random(),
      //   windowWidth * Math.random(),
      //   Math.random() * 115
      // );
    }

    if (p5.mouseIsPressed) {
      audio = !audio;
      Tone.start();
    }

    size += sizeIncrement;

    if (size > 198.7) {
      sizeIncrement *= -1;
      note1 = cmajor[Math.floor(Math.random() * charm.length)];

      audio && playLongNote(note1);
    }

    if (size < 50) {
      sizeIncrement *= -1;
    }

    t += 0.005;
  };

  return (
    <div>
      <Sketch setup={setup} draw={draw} />
    </div>
  );
}

export default Noise;
