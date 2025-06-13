import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteUser } from '../../JS/actions/user.action';

const ToDel = ({show, handleClose, user}) => {
  const dispatch = useDispatch ();
    const handleDelete = ()=> {
        dispatch(deleteUser(user._id))
        handleClose()
    }
  return (
    <div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete...</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete   {user.name} {user.lastName}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ToDel