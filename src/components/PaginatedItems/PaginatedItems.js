import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

const PaginatedItems = ({ itemsPerPage, itemsToPaginate, currentItem }) => {
  function Items({ currentItems }) {
    return <>{currentItems && currentItems.map((item) => currentItem(item))}</>;
  }
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(itemsToPaginate.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(itemsToPaginate.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % itemsToPaginate.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default PaginatedItems;
