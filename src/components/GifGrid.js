import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import  {GifGridItem}  from './GifGridItem';
import PropTypes from 'prop-types';
;





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
                <GifGridItem
                  key={img.id}
                  {...img} />
              )
            })
          }
      </div>
    </>
  )
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
}

export default GifGrid;


