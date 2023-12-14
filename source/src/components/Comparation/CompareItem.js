import React from 'react'

function CompareItem({ product, deleteCompare }) {
  return (
    <div>
      <tr>
            <td><img src={product.image[0]} alt="img" width="200px" /></td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td><button onClick={() => deleteCompare(product.id)}>Delete</button></td>
        </tr>
    </div>
  )
}

export default CompareItem
