import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Navbartwo from "../components/Navbartwo";
import Footernav from "./Footernav";
import AdminNav from "../components/modules/AdminNav";
import { Container } from "reactstrap";

function Crud() {
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8282/student/allstudents");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8282/user/${id}`);
    loadUsers();
  };
  return (
    <div>
      <Navbartwo />
      <h2 style={{ color: "aqua" }}>Welcome Admin</h2>
      <hr />

      <div>
        <Container>
          <AdminNav />
        </Container>
        <div>
          <div className="container">
            <div className="py-4">
              <table className="table border shadow">
                <thead>
                  <tr>
                    <th scope="col">S.N</th>
                    <th scope="col">PRN/E-ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Role</th>
                    <th scope="col">Email</th>

                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((student, index) => (
                    <tr>
                      <th scope="row" key={index}>
                        {index + 1}
                      </th>
                      <td>{student.prn}</td>
                      <td>{student.name}</td>
                      <td>{student.role}</td>
                      <td>{student.email}</td>

                      <td>
                        <Link
                          className="btn btn-primary mx-2"
                          to={`/viewuser/${student.prn}`}
                        >
                          View
                        </Link>
                        <Link
                          className="btn btn-outline-primary mx-2"
                          to={`/edituser/${student.prn}`}
                        >
                          Edit
                        </Link>
                        <button
                          className="btn btn-danger mx-2"
                          onClick={() => deleteUser(student.prn)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <>
        <Footernav />
      </>
    </div>
  );
}

export default Crud;
