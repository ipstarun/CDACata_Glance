import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import Footernav from "../../pages/Footernav";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Container,
} from "reactstrap";
import Navbartwo from "../Navbartwo";

export default function CoreJava() {
  const history = useNavigate();

  useEffect(() => {
    const sValue = sessionStorage.getItem("app_session");
    if (!sValue) {
      history("/login", { replace: true });
    }
  }, []);
  const [open, setOpen] = useState("");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  const onLinkClick = () => {
    fetch(
      "Http://localhost:8282/downloadFile/a5e7e2eb-d99c-40e6-b2a0-ac2bafdd84a1"
    ).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "JAVA 1 soln.pdf";
        alink.click();
      });
    });
  };
  const secondLink = () => {
    fetch(
      "Http://localhost:8282/downloadFile/95bda488-c881-4ae1-a774-e36cd6925657"
    ).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Constructor In Java.pptx";
        alink.click();
      });
    });
  };

  return (
    <div>
      <Navbartwo />
      <hr />
      <h2
        style={{
          textAlign: "center",
          color: "darkgoldenrod",
          fontFamily: "Times New Roman",
          textDecoration: "Underline",
        }}
      >
        Core Java Data list
      </h2>
      <hr />

      {/* list times  */}
      <div>
        <Container style={{ backgroundColor: "darkcyan" }}>
          <Accordion open={open} toggle={toggle}>
            <AccordionItem>
              <AccordionHeader targetId="1">Core Java MCQ </AccordionHeader>
              <AccordionBody accordionId="1">
                <Link onClick={onLinkClick}>JAVA 1 soln.pdf </Link>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="3">
                Constructor In Java
              </AccordionHeader>
              <AccordionBody accordionId="3">
                <Link onClick={secondLink}>Constructor In Java.pptx</Link>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="2">Accordion Item 2</AccordionHeader>
              <AccordionBody accordionId="2">
                <strong>This is the second item&#39;s accordion body.</strong>
                You can modify any of this with custom CSS or overriding our
                default variables. It&#39;s also worth noting that just about
                any HTML can go within the <code>.accordion-body</code>, though
                the transition does limit overflow.
              </AccordionBody>
            </AccordionItem>
          </Accordion>
        </Container>
      </div>

      <Footernav />
    </div>
  );
}
