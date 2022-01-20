import React from 'react';

export const GiftGridItem = ( {id, title, url} ) => {
  return (
  <div className='card animate__animated animate__fadeIn animate__slower"'>
      <p>{title}</p>
      <img src={url} alt='{title}'/>
  </div>);
};
