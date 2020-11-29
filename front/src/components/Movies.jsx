import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import NavbarComponent from './NavbarComponent';

// Bootstrap
import { Card, Button, Container, Row, Col, Alert } from "react-bootstrap";



const Movies = () => {
  const movies = useSelector((state) => state.movies.movies)
  const [show, setShow] = useState(true);

  return (
    <div >
      <NavbarComponent/>
    <Container>
      <Row style={{ margin: "20px" }}>
        {movies ? (
          movies.map((movie) => (
            <Col xs={3} className="mb-5" key={movie.imdbID}>
              <Card className="h-100 shadow-sm bg-white rounded">
                <Card.Img variant="top" src={movie.Poster} />

                <Card.Body className="d-flex w-150 flex-column">
                  <div className="d-flex mb-2 justify-content-between">
                    <Card.Title className="mb-0 font-weight-bold ">
                      {movie.Title}
                    </Card.Title>
                  </div>

                  
                    <Button
                      className="mt-auto font-weight-bold "
                      variant="warning"
                      block
                      href={`/movie/${movie.imdbID}`}
                    >
                     More Details
                    </Button>
                 
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (show &&
                <Alert variant="warning" onClose={() => setShow(false)} dismissible>
                  <Alert.Heading>Movie not found</Alert.Heading>
                  <p>
                    The movie or serie that you are searching for is not in our data base.
                  </p>
                </Alert>
        )}
      </Row>
    </Container>
  </div>
  )
}

export default Movies

{/* <div>
      
{movies.map((m) =>
  <div key={m.imdbID}>
    <h1>{m.Title}</h1>
    <img src={m.Poster} />
    <Link to={`/movie/${m.imdbID}`}>See more</Link>
  </div>)}
</div> */}