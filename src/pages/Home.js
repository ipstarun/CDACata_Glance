import Customnavbar from "../components/Customnavbar";
import Carousell from "./Carousell";
import Footernav from "./Footernav";

import "./Homecss.css";

const Home = () => {
  return (
    <>
      <Customnavbar />

      <Carousell />
      <Footernav />
    </>
  );
};

export default Home;
