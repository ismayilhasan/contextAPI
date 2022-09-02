import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'
import { cardService } from '../../APIs/Services/CardService';

function Comments() {
    const {state:stateIdFromComments} = useLocation();
   const [commentofUser,setCommentsofUser] = React.useState({})
  React.useEffect(() => {
    cardService.getUserComments(stateIdFromComments).then(({data:userData}) => {
       setCommentsofUser(userData)
       
    })
  },[])
  return (
    <>
      <Container>
     
      <Row>
          
             <Col  md = {4}>
             <Card className='my-3' style={{ width: '18rem' }}>
           <Card.Img variant="top" src="holder.js/100px180" />
           <Card.Body>
             <Card.Title>{commentofUser.id}</Card.Title>
             <Card.Title>{commentofUser.name}</Card.Title>
             <Card.Text>
              {commentofUser.body}
             </Card.Text>
             <Button>Go somewhere</Button>
           </Card.Body>
         </Card>
             </Col>
       
      </Row>
    </Container>
    </>
  )
}

export default Comments