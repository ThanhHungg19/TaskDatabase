import { Box, Stack } from "@mui/material";
import React from "react";
import TrelloCard from "./Card/TrelloCard";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
function ListCards({ cards }) {
  return (
    <SortableContext items={cards.map((c) => c._id)} strategy={verticalListSortingStrategy}>
      <Box
        sx={{
          maxHeight: (theme) => "calc(100vh - 48px - 100px)",
          display: "flex",
          flexDirection:'column',
          overflowX: "hidden",
          overflowY: "auto",
          gap:1,   
          marginBottom:1,
        }}
      >
        {cards?.map((card) => (
          <TrelloCard key={card._id} card={card} />
        ))}
      </Box>
    </SortableContext>
  );
}

export default ListCards;
