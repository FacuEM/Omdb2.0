import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchFavs, removeFav} from '../redux/actions/favourites';
import {useParams, Link} from 'react-router-dom';
import NavbarComponent from './NavbarComponent';

// Bootstrap
import { Card, Button, Container, Row, Col, Alert } from "react-bootstrap";


const Favourites = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const [show, setShow] = useState(true);
  const favourites = useSelector((state) => state.favourites.favourites);

  useEffect(() => {
    //bring all the favorite movies of this user
    dispatch(fetchFavs(id))
  }, [])

  return (
  <>
      <NavbarComponent />
      <Container>
      <Row style={{ margin: "20px" }}>
      {favourites.length > 0 ? favourites.map((m) => 
      <Col xs={3} className="mb-5" key={m.id}>
      <Card className="h-100 shadow-sm bg-white rounded">
        <Card.Img variant="top" src={m.poster} />

        <Card.Body className="d-flex w-150 flex-column">
          <div className="d-flex mb-2 justify-content-between">
            <Card.Title className="mb-0 font-weight-bold ">
              {m.title}
            </Card.Title>
          </div>
          </Card.Body>
         <Card.Footer>
            <Button
              className="mt-auto font-weight-bold"
              variant="warning"
              block
              style={{marginBottom: '10px'}}
              href={`/movie/${m.imdbID}`}
            >
            More Details
            </Button>

            <Button
              className="mt-auto font-weight-bold "
              variant="danger"
              block
              onClick={() => dispatch(removeFav(m.id))}>
             Remove
            </Button>
            </Card.Footer>
         
     
      </Card>
    </Col>  
      ) 
      : (show &&
        <Alert variant="warning" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>You don't have any movies in your favorites yet</Alert.Heading>
        </Alert>
)}
 </Row>
</Container>
</>
  )
}

export default Favourites

{/* <div key={m.id}>
        <h3>{m.title}</h3>
        <img src={m.poster}/>
        <button onClick={() => dispatch(removeFav(m.id))}>Remove</button>
      </div> */}