import React from "react";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import { Box, Button } from "@mui/material";
const AddList = () => {
  return (
    <div>
      <Box
        sx={{
          maxWidth: "300px",
          minWidth: "300px",
          bgcolor: "#ccc",
          borderRadius: 3,
        }}
      >
        <Button
          startIcon={<NoteAddIcon />}
          sx={{
            justifyContent: 'center',
            color: "inherit",
            width: "100%",
            borderRadius: 3,  
            }}
        >
          Add New List
        </Button>
      </Box>
    </div>
  );
};

export default AddList;
