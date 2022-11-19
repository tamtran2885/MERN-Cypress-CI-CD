import React, { useState } from "react";
import { Col, Container, Row, Form, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSignupMutation } from "../../services/appApi";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signup, { error, isLoading, isError }] = useSignupMutation();
  const auth = JSON.parse(localStorage.getItem("persist:root"));

  // Function handling signup of new user
  const handleSubmit = (e) => {
    e.preventDefault();
    signup({ name, email, password });
  };

  return (
    <Container>
      <Row>
        <Col md={6} className="signup_form--container">
          <Form style={{ width: "100%" }} onSubmit={handleSubmit}>
            <h1 id="heading">Register your new account: </h1>
            {isError && <Alert variant="danger">{error.data}</Alert>}
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                id="name"
                type="text"
                placeholder="Please enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>

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
                Submit
              </Button>
            </Form.Group>

            <p className="pt-3 text-center">
              Already have an account?{" "}
              <Link to="/login">Login to your account</Link>
            </p>
          </Form>
        </Col>
        <Col md={6} className="signup_image--container"></Col>
      </Row>
    </Container>
  );
};

export default Signup;
