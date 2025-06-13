import React, { useState } from 'react'
import { Button, Card, ListGroup } from 'react-bootstrap'
import './userCard.css'
import ToDel from '../toDelete/ToDel'
import DetailUsers from '../detailUsers/DetailUsers'
const UserCard = ({user}) => {
  const [userToDel, setUserToDel] = useState(false)
  return (
    <div> 
        <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
      <Card.Body>
        <Card.Title>{user.name} {user.lastName}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
      </ListGroup>
      <Card.Body>
       <div className="btn1">
       <DetailUsers user={user} />
      {!user.isAdmin && <Button variant="danger" onClick={()=> setUserToDel(true)}>Delete</Button>}
      </div>

      </Card.Body>
      <ToDel show={userToDel} handleClose={()=> setUserToDel(false)} user={user}  />
    </Card>
    </div>
  )
}

export default UserCard