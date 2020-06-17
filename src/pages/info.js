import React from 'react';
import Title from '../components/title';
import Buttons from '../components/Buttons';

export default function Info(props) {
  return (
      <div className="info">
        <Title title = {props.list[props.number].name} />
        <p>height: {props.list[props.number].height}</p>
        <p>hair color: {props.list[props.number].hair_color} </p>
        <Buttons 
        quit = {props.quit}
        add = {props.add}
        number = {props.number}
        />
      </div>
  );
}
