import React from 'react';
import Title from '../components/title';
import Buttons from '../components/Buttons';

export default function Starships(props) {
  return (
      <div className="info">
        <Title title = {props.list[props.number].name} />
        <p>manufacturer: {props.list[props.number].manufacturer} </p>
        <p>length: {props.list[props.number].length}</p>
        <Buttons 
        quit = {props.quit}
        add = {props.add}
        number = {props.number}
        />
      </div>
  );
}
