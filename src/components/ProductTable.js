import { useState } from "react";

function ProductTableCell({ book }) {
  return (
    <>
      <td className="border border-slate-700 px-3 py-2">{book.author}</td>
      <td className="border border-slate-700 px-3 py-2">{book.title}</td>
      <td className="border border-slate-700 px-3 py-2">{book.year}</td>
    </>
  );
}

function ProductTable({ searchInput, books }) {
  return (
    <>
      <table className="border">
        <thead className="bg-darkBlueGray">
          <tr className="text-left">
            <th className="border border-slate-600 px-3 py-2">Author</th>
            <th className="border border-slate-600 px-3 py-2">Title</th>
            <th className="border border-slate-600 px-3 py-2">Year</th>
          </tr>
        </thead>
        <tbody className="bg-darkGray">
          {books.map((book) => (
            <tr>
              <ProductTableCell book={book} />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ProductTable;
