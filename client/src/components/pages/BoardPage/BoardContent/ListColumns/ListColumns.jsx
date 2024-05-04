import React from "react";
import Column from "./Column/Column";
import { Box, useTheme } from "@mui/material";
import AddList from "./AddList";
import {
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";

function ListColumns({columns}) {
    
  return (
    <SortableContext items={columns.map(c => c._id)} strategy={horizontalListSortingStrategy}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          bgcolor: "white",
          gap: 1,
        }}
      >
        {columns?.map((column) => (
          <Column key={column._id} column={column} />
        ))}
        <AddList />
      </Box>
    </SortableContext>
  );
}

export default ListColumns;
