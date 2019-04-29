import React from 'react'
import PropTypes from 'prop-types'

const AddProduct = ({productName, description, price, handleChange, handleSubmit})=> {
  return (
      <form onSubmit={handleSubmit}>
          <input
              type="text"
              name="productName"
              placeholder="Name of Product"
              value={productName}
              onChange={handleChange}

          />
          <input
              type="text"
              name="description"
              placeholder="Description"
              value={description}
              onChange={handleChange}

          />
          <input
              type="text"
              name="price"
              placeholder="Price"
              value={price}
              onChange={handleChange}

          />
          <button>Add Product</button>
      </form>
  )
}

AddProduct.propTypes = {

}

export default AddProduct

