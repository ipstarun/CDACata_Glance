import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { NavLink as ReactLink } from "react-router-dom";
import { Link } from "react-router-dom";

import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  FormGroup,
  Label,
  Row,
  Form,
  Input,
  Button,
} from "reactstrap";
import Customnavbar from "../components/Customnavbar";
import { loginUser } from "../services/userservice";
import { useNavigate } from "react-router-dom";
import Footernav from "./Footernav";

const Login = (props) => {
  const [LoginDeatils, setLoginDEtails] = useState({
    prn: "",
    password: "",
  });
  const history = useNavigate();

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

  const handleReset = () => {
    setLoginDEtails({
      prn: "",
      password: "",
    });
  };

  const handleFormSubmit = (event) => event.preventDefault();
  console.log(LoginDeatils);
  //validation
  if (LoginDeatils.prn.trim == "" || LoginDeatils.password.trim == "") {
    toast.error("user PRN no or Password is  required!!");
    return;
  }

  // submit the data to server to generatede token

  const onLoginClick = () => {
    loginUser(LoginDeatils)
      .then((jwtTokenData) => {
        console.log("user login:");

        if (jwtTokenData.status === "OK") {
          toast.success("Login Success");
          console.log(history);
          history("/main", { replace: true });
          sessionStorage.setItem("app_session", "userValidated");
          window.currentUser = LoginDeatils.prn;
        } else {
          toast.error("Login failed");
          toast.error("Enter valid Id or Password");
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
  const bgc = {
    color: "#f50057",
  };

  return (
    <div>
      <Customnavbar />
      <div>
        <div style={bgc}>
          <Container className="text-center">
            <Row className="mt-4">
              <Col sm={{ size: 6, offset: 3 }}>
                <Card>
                  <CardHeader>
                    <h2>Login Here!</h2>
                  </CardHeader>
                  <CardBody>
                    <Form onSubmit={handleFormSubmit}>
                      <FormGroup>
                        <Label for="prn" placeholder="Enter your PRN Number">
                          <h5>Enter PRN</h5>
                          <input
                            type="text"
                            id="email"
                            valid={LoginDeatils.prn}
                            onChange={(e) => handleChange(e, "prn")}
                          ></input>
                        </Label>
                      </FormGroup>
                      <FormGroup>
                        <Label for="password" placeholder="Enter your Password">
                          <h5>Enter Password</h5>
                          <input
                            type="password"
                            id="password"
                            value={LoginDeatils.password}
                            onChange={(e) => handleChange(e, "password")}
                          ></input>
                        </Label>
                      </FormGroup>
                      <Container className="text-center">
                        <Button
                          color="success"
                          type="submit"
                          onClick={onLoginClick}
                        >
                          Login
                        </Button>

                        <Link tag={ReactLink} to="/forgot">
                          <Button color="warning" className="ms-2">
                            Forgot Password
                          </Button>
                        </Link>
                      </Container>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <br />
      <br />
      <div>
        <Footernav />
      </div>
    </div>
  );
};

export default Login;
// export default withRouter(Login);
