import React from 'react'

import products from '../data/products'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  function getProductsListItem() {
    return products.map(prod => {
    return <li key={prod.id}>
      {prod.id} - {prod.name} -&gt; $ {prod.price}
    </li>

    })
  }

  return (
    <div>
      <h2>Repitition</h2>
      <ul>
        {getProductsListItem()}
      </ul>
    </div>
  )
}