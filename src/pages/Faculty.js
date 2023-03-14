import React from "react";
import Customnavbar from "../components/Customnavbar";
import Navbartwo from "../components/Navbartwo";
import Footernav from "./Footernav";
import { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Container,
  FormGroup,
  Input,
  Label,
  Form,
  Button,
  Row,
  Col,
  FormFeedback,
} from "reactstrap";

export default function Faculty() {
  const [data, setData] = useState({
    eId: "",
    password: "",
  });
  const resetData = () => {
    setData({
      eId: "",
      password: "",
    });
  };
  return (
    <div>
      <Customnavbar />
      <div>
        <h3
          style={{
            fontFamily: "fantasy",
            textAlign: "center",
            color: "#ff8f00 ",
          }}
        >
          Welcome Sir
        </h3>
      </div>
      <div>
        <Container className="text-center">
          <Row className="mt-4">
            <Col sm={{ size: 6, offset: 3 }}>
              <Card>
                <CardHeader>
                  <h2 style={{ fontFamily: "revert", color: "#1565c0" }}>
                    Enter the Employee-Details
                  </h2>
                </CardHeader>
                <CardBody>
                  <Form>
                    <FormGroup>
                      <Label for="name" name="eId" id="eId">
                        Enter the E-ID
                        <Input
                          type="number"
                          placeholder="Enter the Eployee Id"
                        ></Input>
                      </Label>
                    </FormGroup>
                    <FormGroup>
                      <Label for="name">
                        Enter the Password
                        <Input
                          type="password"
                          placeholder="Enter the Password"
                        ></Input>
                      </Label>
                    </FormGroup>
                    <Button color="success" outline>
                      Login
                    </Button>
                    <Button
                      onClick={resetData}
                      color="warning"
                      className="ms-4"
                      outline
                      type="reset"
                    >
                      Clear Data
                    </Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <Footernav />
    </div>
  );
}
