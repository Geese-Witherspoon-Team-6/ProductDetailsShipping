import React from 'react';

const ShowLessMore = (props) => (<div>
  <div className="Description-Text">Description</div>

  <div className="product-description" id="showmoreless">
    {props.product.description}
  </div>

  <button id="show-product-description-button"
  onClick={() => {
    var x = document.getElementById('show-product-description-button');
    var y = document.getElementById('hide-product-description-button');
    x.style.display = "none";
    y.style.display = "block";
    document.getElementById('showmoreless').setAttribute("class", "new-product-description");}
  }>Learn more about this item</button>

<button id="hide-product-description-button"
  onClick={() => {
    var x = document.getElementById('show-product-description-button');
    var y = document.getElementById('hide-product-description-button');
    x.style.display = "block";
    y.style.display = "none";
    document.getElementById('showmoreless').setAttribute("class", "product-description");}
  }>Less</button>

</div>);

export default ShowLessMore;