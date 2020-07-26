import React from "react";
import PropsTypes from "prop-types";
function Cards(props) {
  return (
    <figure className="card">
      <img src={props.post.imageLink} alt={props.post.description} />
      <p>{props.post.description}</p>
      <button onClick={() => props.onRemovePhoto(props.post)}>Remove</button>
    </figure>
  );
}
Cards.PropsTypes = {
  post: PropsTypes.object.isRequired,
  onRemovePhoto: PropsTypes.func.isRequired
};

export default Cards;
