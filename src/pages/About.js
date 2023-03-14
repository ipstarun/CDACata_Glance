import React from "react";
import Customnavbar from "../components/Customnavbar";
import Footernav from "./Footernav";
import c4 from "../images/edu-card.png";
import Carousel from "react-bootstrap/Carousel";
import { Card } from "reactstrap";

export default function About() {
  return (
    <div>
      <Customnavbar />

      <Card className="my-2" style={{ padding: "60px" }}>
        <Carousel>
          <Carousel.Item>
            <img
              className="Imagesize"
              style={{ display: "flex", width: "350px", height: "300px" }}
              src={c4}
              alt="First slide"
            />
          </Carousel.Item>
        </Carousel>

        <h2 style={{ color: "#ec407a" }}>About Us</h2>

        <b>
          This Web is Devolped for the CDAC Neew-Delhi Students and Faculty.{" "}
          <br />
          This plaform will help the students for DAC Course. In this WebSite
          they can excess all the data realted to CCE and placements and the
          entire DAC module.
          <br />
          The website for everything and everything in the place.
        </b>
      </Card>
      <br />
      <Footernav />
    </div>
  );
}
