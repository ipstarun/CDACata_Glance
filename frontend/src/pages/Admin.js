import React from "react";
import Customnavbar from "../components/Customnavbar";
import { useNavigate } from "react-router-dom";
import Footernav from "./Footernav";
import { useState } from "react";
import { adminUser } from "../services/userservice";
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
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function Admin(props) {
  const history = useNavigate();
  const [LoginDeatils, setLoginDEtails] = useState({
    eId: "",
    password: "",
  });

  const handleChange = (event, filed) => {
    let actualValue = event.target.value;
    setLoginDEtails({
      ...LoginDeatils,
      [filed]: actualValue,
    });
  };
  useEffect(() => {
    sessionStorage.setItem("app_session", "");
    window.currentUser = "";
  }, []);

  const resetData = () => {
    setLoginDEtails({
      eId: "",
      password: "",
    });
  };

  const handleFormSubmit = (event) => event.preventDefault();
  console.log(LoginDeatils);
  //validation
  if (LoginDeatils.eId.trim == "" || LoginDeatils.password.trim == "") {
    toast.error("Admin eID no or Password is  required!!");
    return;
  }

  // submit the data to server to generatede token
  const onLoginClick = () => {
    adminUser(LoginDeatils)
      .then((jwtTokenData) => {
        console.log("user login:");

        if (jwtTokenData.status === "OK") {
          toast.success("Login Success");
          console.log(history);
          history("/crud", { replace: true });
          sessionStorage.setItem("app_session", "userValidated");
          window.currentUser = LoginDeatils.eId;
        } else {
          toast.error("Login failed");
          toast.error("Enter valid eId or Password");
        }
        console.log(jwtTokenData);
      })
      .catch((error) => {
        console.log(error);

        if (error.response.status == 400 || error.response.status == 404) {
          toast.error(error.response.data.message);
        } else {
          toast.error("something went wrong");
        }
      });
  };
  return (
    <div>
      <Customnavbar />
      <div>
        <h1
          style={{
            fontFamily: "fantasy",
            textAlign: "center",
            color: "#ff1744 ",
          }}
        >
          Welcome Admin Sir
        </h1>
      </div>
      <div>
        <Container className="text-center">
          <Row className="mt-4">
            <Col sm={{ size: 6, offset: 3 }}>
              <Card>
                <CardHeader>
                  <h3 style={{ fontFamily: "revert", color: "#1565c0" }}>
                    Enter the Admin Id
                  </h3>
                </CardHeader>
                <CardBody>
                  <Form onSubmit={handleFormSubmit}>
                    <FormGroup>
                      <Label for="name" name="eId">
                        Enter the Admin Id
                        <Input
                          type="text"
                          id="email"
                          valid={LoginDeatils.eId}
                          onChange={(e) => handleChange(e, "eId")}
                          placeholder="Enter the Admin ID "
                        ></Input>
                      </Label>
                    </FormGroup>
                    <FormGroup>
                      <Label for="name">
                        Enter the Password
                        <Input
                          placeholder="Enter the Password"
                          type="password"
                          id="password"
                          value={LoginDeatils.password}
                          onChange={(e) => handleChange(e, "password")}
                        ></Input>
                      </Label>
                    </FormGroup>
                    <Button
                      color="success"
                      outline
                      type="submit"
                      onClick={onLoginClick}
                    >
                      Login
                    </Button>
                    <Button
                      onClick={resetData}
                      color="warning"
                      outline
                      className="ms-4"
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
