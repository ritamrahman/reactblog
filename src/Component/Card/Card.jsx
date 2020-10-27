import React from 'react';

function Card(props) {
  return (
    <div
      className='card'
      style={{
        width: props.width ? props.width : '68%%',
        hight: props.hight,
        margin: props.margin,
        background: props.background ? props.background : '#fff',
        border: props.border,
      }}
    >
      {props.children}
    </div>
  );
}

export default Card;
