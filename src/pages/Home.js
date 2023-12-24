import React, { useCallback, useRef, useEffect } from "react";
import confetti from "canvas-confetti";
import "./home.scss";
const Home = () => {
  const noButtonRef = useRef(null);
    let counter =0;
  useEffect(() => {
    const noButton = noButtonRef.current;

    const moveButton = () => {
      const x = Math.floor(Math.random() * window.innerWidth);
      const y = Math.floor(Math.random() * window.innerHeight);

      const buttonWidth = noButton.offsetWidth;
      const buttonHeight = noButton.offsetHeight;
      const maxX = window.innerWidth - buttonWidth-100;
      const maxY = window.innerHeight - buttonHeight-100;
      const adjustedX = x < maxX ? x : maxX;
      const adjustedY = y < maxY ? y : maxY;
        counter+=1;
        if(counter<9){
      noButton.style.position = "absolute";
      noButton.style.left = `${adjustedX}px`;
      noButton.style.top = `${adjustedY}px`;
        }
    };

    noButton.addEventListener("mouseover", moveButton);

    return () => {
      noButton.removeEventListener("mouseover", moveButton);
    };
  }, []);
  const startConfetti = useCallback(() => {
    var duration = 15 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function () {
      var timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      var particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  }, []);
  return (
    <div className="home">
      <section className="section section1">
        <div className="section-content">
          <h1>Yo Tharika</h1>
          <p>I wanted to ask u something...</p>
          <img
            src="https://media.tenor.com/8rFJZlbhqKUAAAAi/happy-new-year.gif"
            alt="bear-gif"
          />
          <img className="tree" src="./tree.png" alt="tree-png"></img>
          <img className="tree2" src="./tree.png" alt="tree-png"></img>
          <img className="flw1" src="./flw1.png" alt="tree-png"></img>
        </div>
      </section>
      <div className="hidden-container" style={{ display: "none" }}>
        <div className="result">
          Congrats!! U made the right choice... DM me the details😉
        </div>
      </div>
      <section className="section section2">
        <div className="section-content">
          <h1>Do u wanna go out with me for christmas?</h1>
          <img
            src="https://media.tenor.com/KM1VySAHeToAAAAi/cheriuzzina.gif"
            alt="bear-gif"
          ></img>
          <div>
            <button
              className="yes"
              onClick={(e) => {
                startConfetti();
                e.target.parentElement.parentElement.parentElement.parentElement.children[1].style.display =
                  "block";
                e.target.parentElement.parentElement.parentElement.parentElement.children[0].style.display =
                  "none";
                  e.target.parentElement.parentElement.parentElement.parentElement.children[2].style.display =
                  "none";
              }}
            >
              Yes
            </button>
            <button className="no" ref={noButtonRef}>
              No
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
