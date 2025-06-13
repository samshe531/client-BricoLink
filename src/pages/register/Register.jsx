import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../JS/actions/auth.action";

const Register = () => {
  const [newUser, setNewUser] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  //  console.log(newUser)
  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(register(newUser, navigate));
    
  };

  return (
    <div className="register">
      <h2 className="form-title">CREATE ACCOUNT</h2>
      <div className="form-container">
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="First Name"
              name="name"
              value={newUser.name}
              onChange={handleChange}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={newUser.lastName}
              onChange={handleChange}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              placeholder="E-mail Adress"
              name="email"
              value={newUser.email}
              onChange={handleChange}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="tel"
              placeholder="Phone Number"
              name="phone"
              value={newUser.phone}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={newUser.password}
              onChange={handleChange}
            />
          </Form.Group>

          <p>
            {" "}
            Have already an account? <Link to="/login">Login here</Link>
          </p>

          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Register;
