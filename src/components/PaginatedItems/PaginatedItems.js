import React, { useEffect, useState } from 'react';
import { StyledPaginatedItems } from './PaginatedItems.styled';
/* eslint-disable no-unused-expressions */
const PaginatedItems = ({ itemsPerPage, itemsToPaginate, currentItem, refresh, height }) => {
  function Items({ currentItems }) {
    return currentItems && currentItems.map((item) => currentItem(item));
  }

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    setItemOffset(0);
  }, [refresh]);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(itemsToPaginate.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(itemsToPaginate.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, itemsToPaginate]);

  const handlePageClick = ({ selected }) => {
    const newOffset = (selected * itemsPerPage) % itemsToPaginate.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <StyledPaginatedItems
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        className="items-container"
        height={height}
      />
    </>
  );
};

export default PaginatedItems;
