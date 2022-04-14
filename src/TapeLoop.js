import React, { useState, useEffect } from "react";
import Sketch from "react-p5";
import * as Tone from "tone";
import Grain from "./grain.png";
import styled from "styled-components";

function App() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    // Tone.start();

    update();
  });

  const update = () => {
    setWindowHeight(window.innerHeight);
    setWindowWidth(window.innerWidth);
  };

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(windowWidth, windowHeight).parent(canvasParentRef);
    p5.frameRate(5);
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
  let t = 0;

  let startX = windowWidth/2;
  let speed = 8;

  const draw = (p5) => {
    let size = 250;
    p5.background(252, 236, 174, 20);
    // p5.ellipse(startX, windowHeight/2, size);
    p5.fill("black");
    startX += speed;
    p5.strokeWeight(20);
    p5.line(x1, y1, x2, y2);



    if(startX > windowWidth - size/2 || startX < size/2) {
        speed *= -1;
    }

    x2 = p5.random(windowWidth* p5.noise(t + windowWidth));
    y2 = p5.random(windowHeight* p5.noise(t + windowHeight))




    p5.line(x1, y1, x2, y2);

    x1 = x2;
    y1 = y2;


    

    // Start the curve
    p5.beginShape();
    




    t += 0.005;





    // p5.ellipse(0, -50, 100);
  };

  return (
    <div>
      <Sketch setup={setup} draw={draw} />
    </div>
  );
}

export default App;
