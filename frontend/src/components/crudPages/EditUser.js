import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditUser() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    role: "",
  });

  const { name, username, email, role } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8282/user/${id}`, user);
    navigate("/crud");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8282/user/${id}`);
    setUser(result.data);
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Edit User</h2>

            <form onSubmit={(e) => onSubmit(e)}>
              <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                  Name
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your name"
                  name="name"
                  value={name}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Username" className="form-label">
                  Username
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your username"
                  name="username"
                  value={username}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Email" className="form-label">
                  E-mail
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your e-mail address"
                  name="email"
                  value={email}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="role" className="form-label">
                  Role
                </label>
              </div>
              <div className="input-group mb-3">
                <select className="custom-select" id="inputGroupSelect02">
                  <option selected>Choose...</option>
                  <option value="1">Student</option>
                  <option value="2">Faculty</option>
                </select>
                <div class="input-group-append">
                  <label
                    class="input-group-text"
                    name="role"
                    value={role}
                    onChange={(e) => onInputChange(e)}
                    for="inputGroupSelect02"
                  >
                    Options
                  </label>
                </div>
              </div>

              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>
              <Link className="btn btn-outline-danger mx-2" to="/crud">
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditUser;
