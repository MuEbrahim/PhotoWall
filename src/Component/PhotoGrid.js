import React from 'react';
import Cards from './Cards';
import PropsTypes from 'prop-types';
import { Link } from 'react-router-dom';
function PhotoGrid(props) {
  return (
    <div>
      <Link className='addIcon' to='/newPhoto'></Link>
      <div className='photoGrid'>
        {props.posts
        .sort((x,y)=> y.id - x.id) //msh fahem l sort dah !!!
        .map((post, index) => (
          <Cards key={index} post={post} onRemovePhoto={props.onRemovePhoto} />
        ))}
      </div>
    </div>
  );
}
//msh fahem el faydah menha !!
PhotoGrid.ProtoTypes = {
  posts: PropsTypes.array.isRequired,
  onRemovePhoto: PropsTypes.func.isRequired
};

export default PhotoGrid;
