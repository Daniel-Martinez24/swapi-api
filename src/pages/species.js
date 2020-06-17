import React from 'react';
import Title from '../components/title';
import Buttons from '../components/Buttons';

export default function Films(props) {
  return (
      <div className="info">
        <Title title = {props.list[props.number].name} />
        <p>designation: {props.list[props.number].designation} </p>
        <p>language: {props.list[props.number].language}</p>
        <Buttons 
        quit = {props.quit}
        add = {props.add}
        number = {props.number}
        />
      </div>
  );
}
