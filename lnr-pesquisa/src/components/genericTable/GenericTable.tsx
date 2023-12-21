import {
  useReactTable,
  Column,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
  SortingState,
} from "@tanstack/react-table";
import { useState } from "react";

interface TabelaGenericaProps<T extends Record<string, unknown>> {
  columns: Column<T>[];
  data: T[];
}

const TabelaGenerica = <T extends Record<string, unknown>>({
  columns,
  data,
}: TabelaGenericaProps<T>) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const tableInstance = useReactTable({
    columns,
    data,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    debugTable: true,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="l-container">
      <div className="l-tableContainer overflow-y-auto">
        <table className="l-table">
          <thead className="l-flexTh">
            {tableInstance.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((column) => (
                  <th key={column.id} colSpan={column.colSpan}>
                    {column.isPlaceholder ? null : (
                      <div
                        {...{
                          className: column.column.getCanSort()
                            ? "cursor-pointer select-none"
                            : "",
                          onClick: column.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          column.column.columnDef.header,
                          column.getContext()
                        )}
                        {{
                          asc: " 🢁",
                          desc: "  🢃",
                        }[column.column.getIsSorted() as string] ?? null}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {tableInstance.getRowModel().rows.map((row) => {
              return (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TabelaGenerica;
