import React from 'react';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <div className={styles.friend}>
    <span
      className={styles.status}
      style={{ backgroundColor: isOnline ? 'green' : 'red' }}
    />
    <img src={avatar} alt="Avatar" width="48" className={styles.avatar} />
    <p className={styles.name}>{name}</p>
  </div>
);

export default FriendListItem;
