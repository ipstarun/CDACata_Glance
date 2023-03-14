import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SingnUp";
import "react-toastify/dist/ReactToastify.css";
import MainPage from "./pages/MainPage";
import { ToastContainer } from "react-toastify";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Os from "./components/modules/Os";
import COP from "./components/modules/COP";
import CoreJava from "./components/modules/CoreJava";
import DataBase from "./components/modules/DataBase";
import DotNet from "./components/modules/DotNet";
import AdvanceJava from "./components/modules/AdvanceJava";
import SDM from "./components/modules/SDM";
import WBT from "./components/modules/WBT";
import Forgot from "./pages/Forgot";
import Placement from "./components/modules/Placement";
import Resetpassword from "./pages/Resetpassword";
import Faculty from "./pages/Faculty";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";
import Crud from "./pages/Crud";
import Adduser from "./components/crudPages/Adduser";
import EditUser from "./components/crudPages/EditUser";
import ViewUser from "./components/crudPages/ViewUser";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer position="top-center" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="os" element={<Os />} />/
          <Route path="/cop" element={<COP />} />
          <Route path="/corejava" element={<CoreJava />} />
          <Route path="/database" element={<DataBase />} />
          <Route path="/dotnet" element={<DotNet />} />
          <Route path="/advancejava" element={<AdvanceJava />} />
          <Route path="/sdm" element={<SDM />} />
          <Route path="/wbt" element={<WBT />} />
          <Route path="/placement" element={<Placement />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/resetpasswod" element={<Resetpassword />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/crud" element={<Crud />} />
          <Route path="/adduser" element={<Adduser />} />
          <Route path="/viewuser" element={<ViewUser />} />
          <Route path="/edituser" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
