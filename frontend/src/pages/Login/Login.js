import React, { useState } from "react";
import { Col, Container, Row, Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLoginMutation } from "../../services/appApi";
import "./Login.css";

const Login = () => {
  // const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isError, isLoading, error }] = useLoginMutation();
  // const auth = JSON.parse(localStorage.getItem("persist:root"));

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <Container>
      <Row>
        <Col md={6} className="login_form--container">
          <Form style={{ width: "100%" }} onSubmit={handleLogin}>
            <h1 id="heading">Login to your account</h1>
            {isError && <Alert variant="danger">{error.data}</Alert>}
            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                id="email"
                type="email"
                placeholder="Please enter a valid email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                id="password"
                type="password"
                placeholder="Please enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Button type="submit" disabled={isLoading}>
                Login
              </Button>
            </Form.Group>

            <p className="pt-3 text-center">
              Don't have an account? <Link to="/signup">Register account</Link>
            </p>
          </Form>
        </Col>
        <Col md={6} className="login_image--container"></Col>
      </Row>
    </Container>
  );
};

export default Login;
