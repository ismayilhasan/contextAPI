import React from 'react'
import  './index.scss'
import {Button,Card,Col,Container,Row} from 'react-bootstrap'
import { cardService } from '../../APIs/Services/CardService';
import {useHistory} from "react-router-dom";
import { usePostContext } from '../../context/Post';
function Cards() {
  const [users,setUsers] = React.useState([]);
  const history = useHistory()
  const [{isShow,posts}] = usePostContext();

  
  

    const getCommentsbyUser = (id) => {
      cardService.getUserComments(id).then(({data:comments}) => {
        history.push("/comments",id)
      })
    }
  return (
    <>
     

    <Container>
     <h1 className=''> Result</h1>
      <Row>
          {posts.map(({id,title},index) => (
             <Col key={index} md = {4}>
             <Card className='my-3' style={{ width: '18rem' }}>
           <Card.Img variant="top" src="holder.js/100px180" />
           <Card.Body>
             <Card.Title>{id}</Card.Title>
             <Card.Text>
              {title}
             </Card.Text>
             <Button onClick={() => getCommentsbyUser(id)} variant="primary">Get Comments</Button>
           </Card.Body>
         </Card>
             </Col>
          ))}
      </Row>
    </Container>
    </>
  )
}

export default Cards