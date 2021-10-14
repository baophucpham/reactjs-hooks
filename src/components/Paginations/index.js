import React from "react";
import PropTypes from "prop-types";

Pagination.propTypes = {
  paginnation: PropTypes.object.isRequired,
  onpageChange: PropTypes.func,
};

Pagination.defaultProps = {
  onpageChange: null,
};

function Pagination(props) {
  const { paginnation, onpageChange } = props;
  const { _page, _limit, _totalRows } = paginnation;
  const totaPage = Math.ceil(_totalRows / _limit);

  function handlePageChange(newPage) {
    if (onpageChange) {
      onpageChange(newPage);
    }
  }
  return (
    <div>
      <button disabled={_page <= 1} onClick={() => handlePageChange(_page - 1)}>
        Prev
      </button>
      <button
        disabled={_page >= totaPage}
        onClick={() => handlePageChange(_page + 1)}
      >
        next
      </button>
    </div>
  );
}

export default Pagination;
