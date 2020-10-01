import React from 'react';

const ShowLessMore = (props) => (<div>
  <div className="Description-Text">Description</div>

  <div className="product-description">
    {props.product.description}
  </div>
</div>);

export default ShowLessMore;