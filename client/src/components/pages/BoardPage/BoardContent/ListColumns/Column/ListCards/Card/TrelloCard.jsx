import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button, CardActions, Typography } from "@mui/material";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function TrelloCard({ card }) {
  const { attributes, listeners, setNodeRef, transform, transition,isDragging } =
    useSortable({ id: card._id, data: { ...card } });

  const dndKitcardStyle = {
    transform: CSS.Translate.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : undefined,
    border: isDragging ? '1px solid #2ecc71': undefined,
  };

  return (
    <Card 
      ref={setNodeRef} style={dndKitcardStyle} {...attributes} {...listeners}
      sx={{
      cursor: 'pointer',
      overflow: 'unset',

      
    }}>
      <CardContent
        sx={{ 
          paddingTop:'8px',
          paddingBottom:'5px',
          paddingRight: '8px'
      
      }}>
        <Typography>{card?.title}</Typography>
      </CardContent>
      <CardActions sx={{
        paddingLeft: '10px',
        paddingTop:'5px',
        paddingBottom:'5px',
      }}>
        <Button size="small">Add comment</Button>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
  );
}
export default TrelloCard;
