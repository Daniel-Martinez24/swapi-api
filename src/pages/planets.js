import React from 'react';
import Title from '../components/title';
import Buttons from '../components/Buttons';

export default function Planets(props) {
  return (
      <div className="info">
        <Title title = {props.list[props.number].name} />
        <p>terrain: {props.list[props.number].terrain} </p>
        <p>climate: {props.list[props.number].climate}</p>
        <Buttons 
        quit = {props.quit}
        add = {props.add}
        number = {props.number}
        />
      </div>
  );
}
