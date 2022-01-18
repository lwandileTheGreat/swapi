import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

interface Props {
  currentPage: number;
}

let pages: Array<number> = [];
let numberOfPages: number = 9;
for (let _i = 1; _i <= numberOfPages; _i++) {
  pages.push(_i);
}

const Pagination: React.FC<Props> = (Props) => {
  console.log(Props.currentPage);

  return (
    <div>
      <ul className="center text-gray-700 opacity-80">
        <li key='10' className="mx-3 px-3 py-2 bg-yellow-400 hover:bg-yellow-700 rounded-lg hover:text-gray-200">
          {Props.currentPage === 1 ? (
            "Start"
          ) : (
            <Link
              className="flex items-center font-bold "
              to={`/page/${Props.currentPage - 1}`}
            >
              Previous
            </Link>
          )}
        </li>
        {pages.map((pageNumber) => (
          <li className="" key={pageNumber}>
            <Link
              className={`mx-1 px-3 py-2 font-bold rounded-lg  ${
                pageNumber === Props.currentPage
                  ? "bg-yellow-700 text-gray-200 "
                  : "bg-yellow-400 hover:bg-yellow-700  hover:text-gray-200 "
              }`}
              to={`/page/${pageNumber}`}
            >
              {pageNumber}
            </Link>
          </li>
        ))}

        <li  key='11' className="mx-1 px-3 py-2 bg-yellow-400 hover:bg-yellow-700 rounded-lg hover:text-gray-200">
          {Props.currentPage === numberOfPages ? (
            "End"
          ) : (
            <Link
              className="flex items-center font-bold "
              to={`/page/${Props.currentPage + 1}`}
            >
              Next
            </Link>
          )}
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Pagination;
