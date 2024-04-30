import React from "react";
import { Box, Button, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddCardIcon from "@mui/icons-material/AddCard";
import ListCards from "./ListCards/ListCards";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { mapOrder } from "../../../../../../utils/sort";
import { DndContext } from "@dnd-kit/core";

function Column({ column }) {
  const orderedCard = mapOrder(column?.cards, column?.cardOrderIds, "_id");

  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id: column._id, data: { ...column } });

  const dndKitColumnStyle = {
    transform: CSS.Translate.toString(transform),
    transition,
    height:'100%',
    opacity: isDragging ? 0.5 : undefined   
  };

  return (
    <div ref={setNodeRef} style={dndKitColumnStyle} {...attributes} {...listeners}>
      <Box
        sx={{
          minWidth: "300px",
          maxHeight: (theme) => "calc(100vh - 48px)",
          maxWidth: "300px",
          bgcolor: "#ccc",
          borderRadius: 3,
          padding: 1,
          height: "fit-content",
         
        }}
      >
        {/* Title */}
        <Box
          sx={{
            justifyContent: "space-between",
            display: "flex",
            paddingLeft: "5px",
            cursor:'pointer',   
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              marginBottom: 1,
            }}
          >
            {column?.title}
          </Typography>
          <ExpandMoreIcon sx={{ cursor: "pointer" }}></ExpandMoreIcon>
        </Box>

        {/* Content */}
        <ListCards cards={orderedCard} />
        {/* Footer */}
        <Button
          sx={{
            p: 1,
            marginLeft: "5px",
          }}
          onClick={() => {
            console.log("change card");
          }}
          startIcon={<AddCardIcon />}
        >
          Add card
        </Button>
      </Box>
    </div>

  );
}
export default Column;
