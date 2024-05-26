import React, { useEffect, useState } from "react";
import { Calendar, CheckSquare, List, Tag, Trash, Type, MessageCircle } from "react-feather";
import { colorsList } from "../../../helper/util";
import Modal from "../../Modals/Modal";
import CustomInput from "../../CustomInput/CustomInput";
import "./CardInfo.css";
import { ICard, ILabel, ITask, IComment } from "../../../interfaces/kanban";
import Chip from "../../Common/Chip";

interface CardInfoProps {
  onClose: () => void;
  card: ICard;
  boardId: number;
  updateCard: (boardId: number, cardId: number, card: ICard) => void;
}

const CardInfo: React.FC<CardInfoProps> = ({ onClose, card, boardId, updateCard }) => {
  const [selectedColor, setSelectedColor] = useState("");
  const [cardValues, setCardValues] = useState<ICard>({ ...card });

  const updateTitle = (value: string) => setCardValues({ ...cardValues, title: value });
  const updateDesc = (value: string) => setCardValues({ ...cardValues, desc: value });
  const updateDate = (date: string) => setCardValues({ ...cardValues, date });

  const addLabel = (label: ILabel) => {
    if (!cardValues.labels.some((item) => item.text === label.text)) {
      setSelectedColor("");
      setCardValues({ ...cardValues, labels: [...cardValues.labels, label] });
    }
  };

  const removeLabel = (label: ILabel) => {
    setCardValues({ ...cardValues, labels: cardValues.labels.filter((item) => item.text !== label.text) });
  };

  const addTask = (value: string) => {
    const task: ITask = { id: Date.now() + Math.random() * 2, completed: false, text: value };
    setCardValues({ ...cardValues, tasks: [...cardValues.tasks, task] });
  };

  const removeTask = (id: number) => {
    setCardValues({ ...cardValues, tasks: cardValues.tasks.filter((item) => item.id !== id) });
  };

  const updateTask = (id: number, value: boolean) => {
    const tasks = cardValues.tasks.map((item) => (item.id === id ? { ...item, completed: value } : item));
    setCardValues({ ...cardValues, tasks });
  };

  const addComment = (text: string) => {
    const comment: IComment = { id: Date.now() + Math.random() * 2, text };
    setCardValues({ ...cardValues, comments: [...cardValues.comments, comment] });
  };

  const updateComment = (id: number, text: string) => {
    const comments = cardValues.comments.map((item) => (item.id === id ? { ...item, text } : item));
    setCardValues({ ...cardValues, comments });
  };

  const removeComment = (id: number) => {
    setCardValues({ ...cardValues, comments: cardValues.comments.filter((item) => item.id !== id) });
  };

  useEffect(() => {
    if (updateCard) updateCard(boardId, cardValues.id, cardValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardValues]);

  const calculatedPercent = cardValues.tasks.length
    ? (cardValues.tasks.filter((item) => item.completed).length / cardValues.tasks.length) * 100
    : 0;

  return (
    <Modal onClose={onClose}>
      <div className="cardinfo">
        <div className="cardinfo-box">
          <div className="cardinfo-box-title">
            <Type />
            <p>Title</p>
          </div>
          <CustomInput
            defaultValue={cardValues.title}
            text={cardValues.title}
            placeholder="Enter Title"
            onSubmit={updateTitle}
          />
        </div>

        <div className="cardinfo-box">
          <div className="cardinfo-box-title">
            <List />
            <p>Description</p>
          </div>
          <CustomInput
            defaultValue={cardValues.desc}
            text={cardValues.desc || "Add a Description"}
            placeholder="Enter description"
            onSubmit={updateDesc}
          />
        </div>

        <div className="cardinfo-box">
          <div className="cardinfo-box-title">
            <Calendar />
            <p>Date</p>
          </div>
          <input
            type="date"
            defaultValue={cardValues.date}
            min={new Date().toISOString().substr(0, 10)}
            onChange={(event) => updateDate(event.target.value)}
          />
        </div>

        <div className="cardinfo-box">
          <div className="cardinfo-box-title">
            <Tag />
            <p>Labels</p>
          </div>
          <div className="cardinfo-box-labels">
            {cardValues.labels?.map((item, index) => (
              <Chip key={index} item={item} removeLabel={removeLabel} />
            ))}
          </div>
          <ul>
            {colorsList.map((item, index) => (
              <li
                key={index}
                style={{ backgroundColor: item }}
                className={selectedColor === item ? "li-active" : ""}
                onClick={() => setSelectedColor(item)}
              />
            ))}
          </ul>
          <CustomInput
            text="Add Label"
            placeholder="Enter label text"
            onSubmit={(value: string) =>
              addLabel({ color: selectedColor, text: value })
            }
          />
        </div>

        <div className="cardinfo-box">
          <div className="cardinfo-box-title">
            <CheckSquare />
            <p>Tasks</p>
          </div>
          <div className="cardinfo-box-progress-bar">
            <div
              className="cardinfo-box-progress"
              style={{
                width: `${calculatedPercent}%`,
                backgroundColor: calculatedPercent === 100 ? "limegreen" : "",
              }}
            />
          </div>
          <div className="cardinfo-box-task-list">
            {cardValues.tasks?.map((item) => (
              <div key={item.id} className="cardinfo-box-task-checkbox">
                <input
                  type="checkbox"
                  defaultChecked={item.completed}
                  onChange={(event) =>
                    updateTask(item.id, event.target.checked)
                  }
                />
                <p className={item.completed ? "completed" : ""}>{item.text}</p>
                <Trash onClick={() => removeTask(item.id)} />
              </div>
            ))}
          </div>
          <CustomInput
            text={"Add a Checklist"}
            placeholder="Enter CheckList"
            onSubmit={addTask}
          />
        </div>

        <div className="cardinfo-box">
          <div className="cardinfo-box-title">
            <MessageCircle />
            <p>Comments</p>
          </div>
          <div className="cardinfo-box-comments">
            {cardValues.comments?.map((comment) => (
              <div key={comment.id} className="cardinfo-box-comment">
                <CustomInput
                  defaultValue={comment.text}
                  text={comment.text}
                  placeholder="Enter comment"
                  onSubmit={(value: string) => updateComment(comment.id, value)}
                />
                <Trash onClick={() => removeComment(comment.id)} />
              </div>
            ))}
          </div>
          <CustomInput
            defaultValue={cardValues.desc}
            text={cardValues.desc || "Add a Comment"}
            placeholder="Enter a comment"
            onSubmit={updateDesc}
          />
        </div>
      </div>
    </Modal>
  );
}

export default CardInfo;
