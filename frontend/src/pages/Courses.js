import React from "react";
import Customnavbar from "../components/Customnavbar";
import Footernav from "./Footernav";
import b1 from "../images/courses.png";
import course from "../images/courses.jpeg";
import { Card, Container, Form } from "reactstrap";

export default function Courses() {
  return (
    <div>
      <Customnavbar />
      <br />
      <br />
      <Container>
        <Card>
          <img src={b1} alt="#" />
          <br />

          <Container style={{ textAlign: "center" }}>
            <Form>
              <div>
                <h1 style={{ color: "#f50057", fontFamily: "fantasy" }}>
                  Courses Offered
                </h1>
                <img
                  src={course}
                  style={{
                    width: "700px",
                    height: "850px",
                  }}
                  alt=""
                />
              </div>
            </Form>
          </Container>

          <br />
        </Card>
      </Container>
      <Footernav />
    </div>
  );
}
