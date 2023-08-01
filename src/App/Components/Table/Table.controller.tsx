import { GridColDef, GridRowsProp } from "@mui/x-data-grid";

type TableProps = {
  cols: GridColDef[];
  rows: GridRowsProp;
};

const UseTableController = ({ cols, rows }: TableProps) => {
  return {
    Actions: {},
    States: {
      cols,
      rows,
    },
  };
};

export default UseTableController;
