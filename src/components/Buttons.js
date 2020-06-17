import React from 'react';

export default function Title(props) {
  return (
    <div className="change">
        <button onClick={props.quit} > - </button>
            <p>{props.number}</p>
        <button onClick={props.add} > + </button>
    </div>
  );
}
