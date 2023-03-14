import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import "./Flootingg.css";

export default function Floating() {
  const [state] = useState({
    title: "CDAC At a Glance",
    titleTwo: "At a",
    titleThree: "Glance",
  });
  return (
    <div>
      <div className="home">
        <div className="home-intro">
          <h2>
            <div className="text1">
              {state.title}
              <div>
                <div className="text">
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                      delay: 60,
                      strings: ["CDAC at a Glance***", "Hello CDACians!"],
                    }}
                  />
                </div>
              </div>

              <div className="text">
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 60,
                    strings: ["Learn.", "Study Hard", "Success!!!"],
                  }}
                />
              </div>
            </div>
          </h2>
        </div>
      </div>
    </div>
  );
}
