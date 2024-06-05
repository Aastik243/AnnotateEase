/* global Chrome */

import logo from './logo.svg';
import './Annotator.css';
import styled from "styled-components";
import React, {useEffect, useState} from 'react';

const Container = styled.div`
  z-index: 2;
  border: 1px solid grey;
  position: absolute;
  background: #F0F8FF;
  top: ${(props) => props.y + "px"};
  left: ${(props) => props.x + "px"};
`;

const Header = styled.div`
  height: 20px;
  background-color: #7CB9E8;
`;

const StyledButton = styled.button`
  height: 20px;
  border: none;
  opacity: 0.5;
  float: right;
  cursor : pointer;
`;

const StyledTextArea = styled.textarea`
  color: dark grey;
  height: 200px;
  width: 200px;
  border: none;
  background-color: hsla(0, 0%, 100%, 0.2);
`;

function Annotator() {

  
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const clickListener = (e) => {
      if (e.shiftKey) {
        setNotes((prevNotes) => [...prevNotes, { x: e.pageX, y: e.pageY }]);
      }
    }
    document.addEventListener("click", clickListener);
    return () => document.removeEventListener("click", clickListener);
  }, []);


  return (
    <div>
      {notes.map((note) => {
        const handleChange = (e) => {
          const editedText = e.target.value;
          setNotes((prevNotes) =>
            prevNotes.reduce(
              (acc, cv) =>
                cv.x === note.x && cv.y === note.y
                  ? acc.push({ ...cv, note: editedText }) && acc
                  : acc.push(cv) && acc,
              []
            )
          );
        };

        const handleDelete = () => {
          setNotes((prevNotes) =>
            prevNotes.reduce(
              (acc, cv) =>
                cv.x === note.x && cv.y === note.y ? acc : acc.push(cv) && acc,
              []
            )
          );
        };

        return (
          <Container x={note.x} y={note.y}>
            <Header>
              <StyledButton onClick={handleDelete}>X</StyledButton>
            </Header>
            <StyledTextArea
              onChange={handleChange}
              note={note.note ? note.note : ""}
            />
          </Container>
        );
      })}
    </div>
  );
};

export {Annotator};
