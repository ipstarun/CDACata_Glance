import React from "react";
import Customnavbar from "../components/Customnavbar";
import Footernav from "./Footernav";
import { useNavigate } from "react-router-dom";

export default function Resetpassword() {
  const history = useNavigate();
  return (
    <div>
      <Customnavbar />
      <h3>resset page</h3>

      <Footernav />
    </div>
  );
}
