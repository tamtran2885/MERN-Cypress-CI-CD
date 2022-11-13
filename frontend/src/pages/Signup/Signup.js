import React, { useState } from "react";
import { Col, Container, Row, Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Signup.css";
import { useSignupMutation } from "../../services/appApi";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signup, { error, isLoading, isError }] = useSignupMutation();

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
            <h1>Register your new account: </h1>
            {isError && <Alert variant="danger">{error.data}</Alert>}
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
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
