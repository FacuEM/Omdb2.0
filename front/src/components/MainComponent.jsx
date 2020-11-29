import React, {useEffect} from 'react';
import {useDispatch , useSelector} from 'react-redux';
import { fetchMovies } from "../redux/actions/movies";
import NavbarComponent from './NavbarComponent';

// Bootstrap
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const MainComponent = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies)

  // pick a random movie to be the featured one
  const moviesArr = ['batman', 'titanic', 'avengers', 'superman']
  const randomIndex = Math.floor(Math.random() * moviesArr.length);

 
  useEffect(() => {
    //fetch all Batman movies
    dispatch(fetchMovies(moviesArr[randomIndex]))
  }, []);
  return ( 
      <div >
        <NavbarComponent/>
        <h1 style={{marginTop: '20px', textAlign: 'center', color: '#8d918e'}}>FEATURED FILMS</h1>
    <Container>
      <Row style={{ margin: "20px" }}>
        {movies && (
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
        )}
      </Row>
    </Container>
 
    </div>
  )
}

export default MainComponent;
