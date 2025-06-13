import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {login} from '../../JS/actions/auth.action'


const Login = () => {
  const [userToConnect, setuserToConnect] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleChange = (e) => {
    setuserToConnect({ ...userToConnect, [e.target.name]: e.target.value });
  };
  // console.log(userToConnect)
  const handleLogin = (e) => {
    e.preventDefault();
      dispatch(login(userToConnect, navigate))
  }
  return (
    <div className="login">
      <h2>LOGIN</h2>
      <div className="form-container">
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              placeholder="E-mail Adress"
              name="email"
              value={userToConnect.email}
              onChange={handleChange}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={userToConnect.password}
              onChange={handleChange}
            />
          </Form.Group>
          <p>
            {" "}
            <Link to="/register">Create account</Link>
          </p>

          <Button variant="primary" type="submit">
            Login{" "}
          </Button>
        </Form>
        
      </div>
    </div>
  );
};

export default Login;
