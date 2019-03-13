import React from 'react';
import styles from './PersonsListGrid.module.css';

const PersonsListGrid = ({ data = [] }) => (
  <table className={styles.table}>
    <thead className={styles.thead}>
      <tr>
        <th className={styles.th}>Id</th>
        <th className={styles.th}>Name</th>
        <th className={styles.th}>City</th>
        <th className={styles.th}>Email</th>
        <th className={styles.th}>Phone</th>
        <th className={styles.th}>Change data</th>
      </tr>
    </thead>
    <tbody>
      {data.map(({ id, name, city, email, phone, editData }) => (
        <tr key={id}>
          <td className={styles.td}>{id}</td>
          <td className={styles.td}>{name}</td>
          <td className={styles.td}>{city}</td>
          <td className={styles.td}>{email}</td>
          <td className={styles.td}>{phone}</td>
          <td className={styles.td}>
            <button
              className={styles.button}
              type="button"
              onClick={() => {
                console.log('Этот функционал не реализован');
              }}
            >
              Edit
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
export default PersonsListGrid;
