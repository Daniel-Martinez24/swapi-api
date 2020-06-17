import React from 'react';
import Title from '../components/title';
import Buttons from '../components/Buttons';

export default function Films(props) {
  return (
      <div className="info">
        <Title title = {props.list[props.number].title} />
        <p>{props.list[props.number].director} </p>
        <p>{props.list[props.number].opening_crawl}</p>
        <Buttons 
        quit = {props.quit}
        add = {props.add}
        number = {props.number}
        />
      </div>
  );
}
