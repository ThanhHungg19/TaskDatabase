import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { selectBoard } from "../Redux/Slices/boardSlice";

export default function BoardSelect() {
  const [anchorEl, setAnchorEl] = React.useState();
  const boardList = useSelector((s) => s.board.data);
  const currentBoardData = useSelector((s) => s.board.currentBoardData);
  const dispatch = useDispatch();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleSelect = (id) => {
    dispatch(selectBoard(id))
    setAnchorEl(null);
    
  };
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {currentBoardData.title}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {boardList.map((board) => {
          return (
            <MenuItem key={board._id} onClick={()=>handleSelect(board._id)}>
              {board.title}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
}
