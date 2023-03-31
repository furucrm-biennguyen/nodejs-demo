function getOffset(listPerPage, currentPage = 1) {
  return (currentPage - 1) * [listPerPage];
}

function emptyOrRows(rows) {
  if (!rows) {
    return [];
  }
  return rows;
}

function messageResponse(message) {
  return {
    message,
  };
}

module.exports = {
  getOffset,
  emptyOrRows,
  messageResponse,
};
