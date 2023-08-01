import React from "react";

import {
  DataGrid,
  GridColDef,
  GridRowsProp,
  GridToolbar,
} from "@mui/x-data-grid";
import Box from "@mui/material/Box";

import UseTableController from "./Table.controller";

type TableProps = {
  cols: GridColDef[];
  rows: GridRowsProp;
};

const Table = ({ cols, rows }: TableProps) => {
  const { States } = UseTableController({ cols, rows });
  return (
    <Box>
      <DataGrid
        rows={States.rows}
        columns={States.cols}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        pageSizeOptions={[5, 10]}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
      />
    </Box>
  );
};

export default Table;
