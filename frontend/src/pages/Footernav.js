import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBRipple,
  MDBIcon,
} from "mdb-react-ui-kit";
import {
  FaInstagram,
  FaGoogle,
  FaFacebookSquare,
  FaLinkedin,
  FaTwitter,
  FaWhatsappSquare,
} from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { AiTwotoneMail, AiTwotonePhone } from "react-icons/ai";

import "./Homecss.css";
import { Link } from "react-router-dom";
export default function Footernav() {
  return (
    <div>
      <div>
        <MDBFooter
          bgColor="light"
          className="text-center text-lg-start text-muted"
        >
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>

            <div className="Display">
              <>
                <a href="">
                  {" "}
                  <h2>
                    <FaFacebookSquare />{" "}
                  </h2>
                </a>
              </>
              <>
                <a href="">
                  {" "}
                  <h2>
                    <FaInstagram />{" "}
                  </h2>
                </a>
              </>
              <>
                <a href="">
                  {" "}
                  <h2>
                    <FaGoogle />{" "}
                  </h2>
                </a>
              </>
              <>
                <a href="">
                  {" "}
                  <h2>
                    <FaLinkedin />{" "}
                  </h2>
                </a>
              </>
              <>
                <a href="">
                  {" "}
                  <h2>
                    <FaTwitter />{" "}
                  </h2>
                </a>
              </>
              <>
                <a href="">
                  {" "}
                  <h2>
                    <FaWhatsappSquare />{" "}
                  </h2>
                </a>
              </>
            </div>
          </section>

          <section className="">
            <MDBContainer className="text-center text-md-start mt-5">
              <MDBRow className="mt-3">
                <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                  <h6
                    className="text-uppercase fw-bold mb-4"
                    style={{ color: "#f50057  " }}
                  >
                    <MDBIcon icon="gem" className="me-3  " />
                    CDAC at a Glance
                  </h6>
                  <p style={{ color: "black", textAlign: "justify" }}>
                    This Website is developed specially for the CDAC Delhi
                    students.This website will provide them a platform where
                    they can get all the{" "}
                    <b>Study Materical related to CDAC and CCE</b> and Faculty
                    can also upload the data for the students.
                  </p>
                </MDBCol>

                <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                  <h6
                    className="text-uppercase fw-bold mb-4"
                    style={{ color: "#f50057  " }}
                  >
                    Popular Languages
                  </h6>

                  <p style={{ color: "blue" }}>
                    <Link to="https://reactjs.org/" className="text-reset">
                      React Js
                    </Link>
                  </p>

                  <p style={{ color: "blue" }}>
                    <Link to="https://www.java.com/en/" className="text-reset">
                      Java
                    </Link>
                  </p>
                  <p style={{ color: "blue" }}>
                    <Link to="https://www.python.org/" className="text-reset">
                      Python
                    </Link>
                  </p>
                  <p style={{ color: "blue" }}>
                    <Link to="https://nodejs.org/en/" className="text-reset">
                      Node Js
                    </Link>
                  </p>
                </MDBCol>

                <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                  <h6
                    className="text-uppercase fw-bold mb-4"
                    style={{ color: "#f50057  " }}
                  >
                    Contact
                  </h6>
                  <Link to="https://goo.gl/maps/215v8JhY84odbJsp9">
                    <p>
                      {/* <MDBIcon icon="home" className="me-2" /> */}
                      <IoLocationOutline />
                      New Delhi
                    </p>
                  </Link>
                  <Link to="mailto:pankajk@cdac.in">
                    <p>
                      <AiTwotoneMail />
                      information@cdac.in
                    </p>
                  </Link>

                  <p style={{ color: "#ff6d00 " }}>
                    <AiTwotonePhone /> +07272455001
                  </p>
                  <p style={{ color: "#ff6d00 " }}>
                    <AiTwotonePhone /> + 073120023
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>
        </MDBFooter>
      </div>
      <div>
        <MDBFooter
          className="text-center text-white"
          style={{ backgroundColor: "#caced1" }}
        >
          <MDBContainer className="p-4">
            <section className="">
              <MDBRow>
                <MDBCol lg="2" md="12" className="mb-4 mb-md-0">
                  <MDBRipple
                    rippleColor="light"
                    className="bg-image hover-overlay shadow-1-strong rounded"
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
                      className="w-100"
                    />
                    <a>
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                      ></div>
                    </a>
                  </MDBRipple>
                </MDBCol>
                <MDBCol lg="2" md="12" className="mb-4 mb-md-0">
                  <MDBRipple
                    rippleColor="light"
                    className="bg-image hover-overlay shadow-1-strong rounded"
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/fluid/city/111.webp"
                      className="w-100"
                    />
                    <a>
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                      ></div>
                    </a>
                  </MDBRipple>
                </MDBCol>
                <MDBCol lg="2" md="12" className="mb-4 mb-md-0">
                  <MDBRipple
                    rippleColor="light"
                    className="bg-image hover-overlay shadow-1-strong rounded"
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/fluid/city/112.webp"
                      className="w-100"
                    />
                    <a>
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                      ></div>
                    </a>
                  </MDBRipple>
                </MDBCol>
                <MDBCol lg="2" md="12" className="mb-4 mb-md-0">
                  <MDBRipple
                    rippleColor="light"
                    className="bg-image hover-overlay shadow-1-strong rounded"
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/fluid/city/114.webp"
                      className="w-100"
                    />
                    <a>
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                      ></div>
                    </a>
                  </MDBRipple>
                </MDBCol>
                <MDBCol lg="2" md="12" className="mb-4 mb-md-0">
                  <MDBRipple
                    rippleColor="light"
                    className="bg-image hover-overlay shadow-1-strong rounded"
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/fluid/city/115.webp"
                      className="w-100"
                    />
                    <a>
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                      ></div>
                    </a>
                  </MDBRipple>
                </MDBCol>
                <MDBCol lg="2" md="12" className="mb-4 mb-md-0">
                  <MDBRipple
                    rippleColor="light"
                    className="bg-image hover-overlay shadow-1-strong rounded"
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/fluid/city/116.webp"
                      className="w-100"
                    />
                    <a>
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                      ></div>
                    </a>
                  </MDBRipple>
                </MDBCol>
              </MDBRow>
            </section>
          </MDBContainer>

          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", color: "red" }}
          >
            © 2023 Copyright :
            <a
              className="text-white"
              href="https://www.cdac.in/index.aspx?id=DL"
            >
              CDACataGlange.com
            </a>
          </div>
        </MDBFooter>
      </div>
    </div>
  );
}
