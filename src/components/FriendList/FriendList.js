import React from 'react';
import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendList = ({ friends = [] }) => (
  <ul className={styles.friendList}>
    {friends.map(friend => (
      <FriendListItem key={friend.id} {...friend} />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired }),
  ).isRequired,
};

export default FriendList;
