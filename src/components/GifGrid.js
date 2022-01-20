import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GiftGridItem } from './GiftGridItem';




const GifGrid = ({ category }) => {

  const { loading, data: images } = useFetchGifs(category);

  return (
    <>
      <h3 className='animate__animated animate__jello'>{category}</h3>
      {loading && <p>loading...</p>}
      <div className='card-grid'>
  
          {
            images.map(img => {
              return (
                <GiftGridItem
                  key={img.id}
                  {...img} />
              )
            })
          }
      </div>
    </>
  )
};

export default GifGrid;
