import React from 'react';
import PropTypes from 'prop-types';

function Pagination({ pagination, onPageChange }) {
  const { _limit, _page, _totalRows } = pagination;
  const totalPages = Math.ceil(_totalRows / _limit); // Math.ceil làm tròn lên

  const handlePageChange = (newPage) => {
    if (!onPageChange) return;
    onPageChange(newPage);
  };

  return (
    <div>
      <button disabled={_page <= 1} onClick={() => handlePageChange(_page - 1)}>
        Prev
      </button>
      <button
        disabled={_page >= totalPages}
        onClick={() => handlePageChange(_page + 1)}
      >
        Next
      </button>
    </div>
  );
}

Pagination.propTypes = {
  onPageChange: PropTypes.func,
  pagination: PropTypes.object.isRequired,
};

Pagination.defaultProps = {
  onPageChange: null,
};

export default Pagination;
