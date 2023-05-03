import { useTable } from "react-table";
import React, { useEffect, useState, useCallback } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

function Table(props) {
  const [count, setCount] = useState(10);
  const [page, setPage] = React.useState(1);
  const [start, setStart] = useState(0);
  const [loading, setLoading] = useState(true);
  const [end, setEnd] = useState(page * 5);

  const handleChange = useCallback((event, value) => {
    setPage(value);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  useEffect(() => {
    setStart(page * props.defaultPageSize - props.defaultPageSize);
    setEnd(page * props.defaultPageSize);
  }, [page, handleChange, props.defaultPageSize]);
  useEffect(() => {
    setPage(1);
    setCount(Math.ceil(data.length / props.defaultPageSize));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.data]);

  const columns = props.columns ? props.columns : [];
  const data = props.data ? props.data : [];

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <>
      <table {...getTableProps()} className="w-[100%]">
        <thead>
          {headerGroups.map((headerGroup, i) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              className=" h-[50px] border-[1px] border-gray-300 w-[100%]"
              key={i}
            >
              {headerGroup.headers.map((column, i) => (
                <th
                  {...column.getHeaderProps()}
                  className=" h-[50px] border-[1px] border-gray-300 px-[10px]"
                  key={i}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        {data && data.length > 0 ? (
          <tbody {...getTableBodyProps()}>
            {rows.slice(start, end).map((row, i) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  className="h-[50px] border-[1px] border-gray-300 "
                  key={i}
                >
                  {row.cells.map((cell, i) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        className=" h-[50px] border-[1px] border-gray-300  text-center"
                        key={i}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        ) : !loading ? (
          <tbody className="w-[100%] relative border-gray-300 border-[1px] h-[250px]">
            <div className="absolute top-[50%] left-[40%] bg-white py-[10px] px-[18px] text-[18px] font-semibold">
              Data Not Found
            </div>
          </tbody>
        ) : null}
      </table>
      {loading && data && data.length === 0 ? (
        <div className="flex justify-center mt-[40px]">
          <CircularProgress />
        </div>
      ) : null}
      {!props.hidePagination && data && data.length > props.defaultPageSize ? (
        <div
          className={
            props.width === true
              ? "flex justify-end mt-[15px] w-[540px] sm:w-[100%]"
              : "flex justify-end mt-[15px]  sm:w-[100%]"
          }
        >
          <Stack spacing={2}>
            <Pagination
              count={count}
              page={page}
              onChange={handleChange}
              size="large"
              variant="outlined"
              color="primary"
              defaultPage={1}
            />
          </Stack>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Table;
