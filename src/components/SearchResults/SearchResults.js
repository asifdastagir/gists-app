import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import axios from "../../config/index";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const SearchResults = () => {
  const [gitsList, setData] = useState([]);

  const [error, setError] = useState();

  const getData = async () => {
    try {
      const response = await axios.get("users/jsphkhan/gists");
      setData(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <p>{error}</p>

      <Row className="">
        <Col md="12" className="my-2">
          <h1>Search Gist Here</h1>
          {error !== "" && <h2>{error}</h2>}
        </Col>
      </Row>

      <Row>
        {gitsList.map((gits) => {
          const { id, description, files, comments } = gits;
          return (
            <>
              <Col md={4} className="mb-3">
                <Card id={id} key={id} className="h-100">
                  <Card.Body>
                    <Card.Title>{description}</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <div className="my-3 d-flex">
                      <div className="mr-2">
                        <Badge bg="success">Files: {files.length}</Badge>
                      </div>
                      <div className="mr-2">
                        <Badge bg="success">Comments: {comments}</Badge>
                      </div>
                    </div>
                    <Button variant="primary" size="sm">
                      More details
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </>
          );
        })}
      </Row>
    </Container>
  );
};

export default SearchResults;
