import React, { useState } from "react";
import Navbar from "../../Navbar";
import { Container, Wrapper, Title, AddBoard } from "./Styled";
import { Navigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate.push(`/board/${e.target.id}`);
  };

  const handleCreateBoard = async (title) => {
    try {
      const newBoard = await createBoard({ title });
      navigate(`/board/${newBoard.id}`); // Adjust according to the actual response structure
    } catch (error) {
      console.error("Failed to create board:", error);
    }
  };
  const [openModal, setOpenModal] = useState(false);
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>Your Boards</Title>
        <AddBoard onClick={() => setOpenModal(true)}>Create new board</AddBoard>
        <Modal
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
          onSubmit={handleCreateBoard}
        />
      </Wrapper>
    </Container>
  );
};

export default HomePage;
