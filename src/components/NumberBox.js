import React from 'react';

export default function NumberBox(props) {
  return (
    <div id={`array-${props.index}`} className="array-container"><div className="array-number">{props.number}</div></div>
  );
}