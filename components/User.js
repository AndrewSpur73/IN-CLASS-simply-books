import React from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { useAuth } from '../utils/context/authContext';

export default function User() {
  const { user } = useAuth();

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={user.photoURL} alt="profile picture" style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{user.displayName}</Card.Title>
        <p className="card-text bold">Email: {user.email}</p>
        <p className="card-text bold">Last Login: {user.metadata.lastSignInTime}</p>
      </Card.Body>
    </Card>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    photoURL: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    lastSignInTime: PropTypes.string.isRequired,
  }).isRequired,
};
