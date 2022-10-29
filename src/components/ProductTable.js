function ProductTableCell({ book }) {
  return (
    <>
      <td className="border border-slate-700 px-3 py-2">{book.author}</td>
      <td className="border border-slate-700 px-3 py-2">{book.title}</td>
      <td className="border border-slate-700 px-3 py-2">{book.year_published}</td>
    </>
  );
}

function ProductTable({ books }) {
  return (
    <>
      <table className="border table-fixed">
        <thead className="bg-darkBlueGray">
          <tr className="text-left">
            <th
              style={{ width: "180px" }}
              className="border border-slate-600 px-3 py-2"
            >
              Author
              <i className="float-right arrow down mt-1.5" />
            </th>
            <th
              style={{ width: "180px" }}
              className="border border-slate-600 px-3 py-2"
            >
              Title
              <i className="float-right arrow down mt-1.5" />
            </th>
            <th
              style={{ width: "180px" }}
              className="border border-slate-600 px-3 py-2"
            >
              Year
              <i className="float-right arrow down mt-1.5" />
            </th>
          </tr>
        </thead>
        <tbody className="bg-darkGray">
          {books.map((book) => (
            <tr key={book.id}>
              <ProductTableCell book={book} />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ProductTable;
