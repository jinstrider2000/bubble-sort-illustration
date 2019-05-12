import React from 'react';

export default function NumberBox(props) {
  return (
    <div id={`array-${props.index}`} className={props.classes}>{props.number}</div>
  );
}