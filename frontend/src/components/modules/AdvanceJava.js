import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footernav from "../../pages/Footernav";

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Container,
} from "reactstrap";
import Navbartwo from "../Navbartwo";

export default function AdvanceJava(props) {
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
        Advance java Data list
      </h2>
      <hr />

      {/* list times  */}
      <div>
        <Container style={{ backgroundColor: "darkcyan" }}>
          <Accordion open={open} toggle={toggle}>
            <AccordionItem>
              <AccordionHeader targetId="1">Accordion Item 1</AccordionHeader>
              <AccordionBody accordionId="1">
                <strong>This is the first item&#39;s accordion body.</strong>
                You can modify any of this with custom CSS or overriding our
                default variables. It&#39;s also worth noting that just about
                any HTML can go within the <code>.accordion-body</code>, though
                the transition does limit overflow.
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
            <AccordionItem>
              <AccordionHeader targetId="3">Accordion Item 3</AccordionHeader>
              <AccordionBody accordionId="3">
                <strong>This is the third item&#39;s accordion body.</strong>
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
