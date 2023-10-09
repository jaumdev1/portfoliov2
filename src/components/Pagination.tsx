import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="w-full flex justify-end gap-5  font-roboto font-bold p-2">
      {pageNumbers.map((page, index) => (
        <div className=''>  
        <button 
          key={page}
          onClick={() => onPageChange(page)}
          className={currentPage === page ? 'text-blue-400' : ''}
        >
          {page}
        </button>

     
        </div>
      ))}
    </div>
  );
};

export default Pagination;