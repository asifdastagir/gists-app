import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const SearchForm = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={3}>
          <Form className="mt-5">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <h6>Enter Userename</h6>
              <Form.Control type="email" placeholder="eg. asifdastagir" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchForm;
