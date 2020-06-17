import React from 'react';
import Title from '../components/title';
import Buttons from '../components/Buttons';

export default function Vehicles(props) {
  return (
      <div className="info">
        <Title title = {props.list[props.number].name} />
        <p>model: {props.list[props.number].model} </p>
        <p>manufacturer: {props.list[props.number].manufacturer}</p>
        <Buttons 
        quit = {props.quit}
        add = {props.add}
        number = {props.number}
        />
      </div>
  );
}
