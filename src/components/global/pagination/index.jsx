import React from "react";

function Pagination({ currentPage, handlePrevious, totalPages, handleNext }) {
  return (
    <div className="flex justify-center items-center mt-4 space-x-4 text-xs">
      {/* eslint-disable-next-line react/button-has-type  */}
      <button
        className={`px-4 py-2 rounded ${
          currentPage === 1
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-blue-500 text-white"
        }`}
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      <span>
        Page {currentPage} of {totalPages}
      </span>
      {/* eslint-disable-next-line react/button-has-type  */}
      <button
        className={`px-4 py-2 rounded ${
          currentPage === totalPages
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-blue-500 text-white"
        }`}
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
