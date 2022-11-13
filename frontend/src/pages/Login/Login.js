import React, { useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {};

  return (
    <Container>
      <Row>
        <Col md={6} className="login_form--container">
          <Form style={{ width: "100%" }}>
            <h1>Login to your account</h1>
            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
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
                type="password"
                placeholder="Please enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Button type="submit">Login</Button>
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
