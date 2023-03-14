import React from "react";
import Carousel from "react-bootstrap/Carousel";

import { Link } from "react-router-dom";

import b1 from "../images/b1.jpg";
import c1 from "../images/cdac2.jpg";
import c2 from "../images/cdac.jpeg";
import c3 from "../images/cdacBuilding.jpeg";
import c4 from "../images/about_us.jpg";
import c6 from "../images/job.jpg";
import "./Homecss.css";
// import { Form } from "reactstrap";

function Carousell() {
  return (
    <div>
      <main>
        <Carousel>
          <Carousel.Item>
            <img className="Imagesize" src={c4} alt="First slide" />
            <Carousel.Caption>
              <h3>CDAC At a Glance </h3>
              <p>A Compleate Platform for the CDACian's.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="Imagesize" src={c6} alt="Third slide" />

            <Carousel.Caption>
              <h3 style={{ color: "#ff1744" }}>CAREERS</h3>
              <h6 style={{ color: "#d50000" }}>
                C-DAC offers exciting career opportunities at its headquarters
                in Pune and other centres.
              </h6>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="Imagesize" src={b1} alt="Second slide" />

            <Carousel.Caption>
              <h3 style={{ color: "#f50057" }}>
                Education and Training Program
              </h3>
              <h4 style={{ color: "#f50057" }}>
                Education and Training programmes are aimed at creating skilled
                manpower in the country by providing quality training programmes
                in the field of Electronics and ICT.
              </h4>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </main>
      <div>
        <img src={c1} alt="" className="C1" />
      </div>
      <div>
        <img src={c2} alt="" className="C2" />
      </div>
      <div>
        <br />
        <Link to="https://www.cdac.in/index.aspx?id=DL">
          <h3 className="Name"> CDAC New-Delhi</h3>
        </Link>
        <hr />
        <img src={c3} className="Building" alt="" />
        <p className="Para">
          <b>
            Delhi Centre at was established in 1989 as a Project Cell for R&D in
            the area of Digital Signal Processing (DSP).
          </b>
          <br /> Being in Delhi and near to the then Department of Electronics
          (DoE), the centre was involved in various coordination activities
          between DoE and all other C-DAC Centres. focus areas of the Delhi
          Centre are Cyber Security, Education and Training, e-Governance
          Solutions, Extended Reality, International Cooperation,
          Neuro-Cognitive AI and Software Technology. C-DAC Delhi has set up the
          International Cooperation Division (ICD) to promote the product &
          technologies available across centres to meet the ever-increasing
          requirements of the IT industry. ICD is actively working with Ministry
          of External Affairs (MEA) & Ministry of Electronics & IT (MeitY)
          towards collaborations/ co-operations with various countries, by
          sharing knowledge, expertise and experience in the field of ICT. Till
          today C-DAC has successfully implemented numerous projects in 40
          countries in Africa, East Europe, South-East Asia, Central Asia,
          Middle East, Arab, Latin America, Caribbean and Pacific Island
          Countries in close association with Ministry of External Affairs and
          Ministry of Electronics & IT. These projects have brought in laurels
          for C-DAC and propelled Indian expertise in ICT in the International
          Arena. C-DAC Delhi has setup Advanced Computing Training School (ACTS)
          in its new building at Jasola Institutional Area, New Delhi in Sep
          2020 and is offering PG Diploma in Advanced Computing (PG-DAC) & PG
          Diploma in Big Data Analytics (PG-DBDA) for domestic & international
          students apart from corporate training to several foreign agencies,
          Ministries/ Departments under Central & State Government.{" "}
        </p>
      </div>
    </div>
  );
}

export default Carousell;
