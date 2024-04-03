import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dog1 from "./dog-1.jpg";
import dog2 from "./dog-2.jpg";
import dog3 from "./dog-3.jpg";
import "./App.css";

function App() {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section--blue",
        start: "top top",
        end: "bottom -=100%",
        scrub: true,
        pin: true,
        toggleClass: "square--active",
        markers: {
          startColor: "white",
          endColor: "white",
        },
      },
    });
    tl.fromTo(
      ".dog-1",
      { opacity: 0, x: -500 },
      { opacity: 1, x: 0, rotation: 25 }
    )
      .fromTo(
        ".dog-2",
        { opacity: 0, x: 500 },
        { opacity: 1, x: 0, rotation: -25 }
      )
      .fromTo(
        ".dog-3",
        { opacity: 0, y: -500 },
        { opacity: 1, y: 0, rotation: 20 }
      );
  }, []);
  return (
    <>
      <section className="section section--green"></section>
      <section className="section section--blue">
        <img src={dog1} alt="" className="dog-1" />
        <img src={dog2} alt="" className="dog-2" />
        <img src={dog3} alt="" className="dog-3" />
      </section>
      <section className="section section--cream"></section>
    </>
  );
}

export default App;
