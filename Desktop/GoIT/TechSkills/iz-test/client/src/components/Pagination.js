import React from 'react';

import styles from './Pagination.module.css';

const Pagination = ({
  currentPage,
  limitPersons,
  nextPage,
  prevPage,
  maxItems
}) => {
  const nexItem =
    currentPage * limitPersons <= maxItems
      ? currentPage * limitPersons
      : maxItems;
  return (
    <div className={styles.pagination}>
      {currentPage !== 1 && (
        <div className={styles.arrowLeft} onClick={prevPage} />
      )}
      <span className={styles.num}>{currentPage}</span>
      {nexItem !== maxItems && (
        <div className={styles.arrowRight} onClick={nextPage} />
      )}
    </div>
  );
};

export default Pagination;
