import React from 'react';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <div className={styles.friend}>
    <img src={avatar} alt="Avatar" width="48" className={styles.avatar} />
    <div className={styles.info}>
      <p className={styles.name}>{name}</p>
      <span
        className={isOnline ? styles.statusOnline : styles.statusOffline}
      >
        {isOnline ? 'Online' : 'Offline'}
      </span>
    </div>
  </div>
);

export default FriendListItem;