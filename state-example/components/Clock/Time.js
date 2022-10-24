import React from 'react'

function Time() {
    let date = new Date();

    let hours = date.getHours();
    let className;
    if (hours >= 0 && hours <= 6) {
        className = 'night';
    } else {
        className = 'day';
    }
  return (
    <h1 className='className'>
        Time
    </h1>
  )
}

export default Time