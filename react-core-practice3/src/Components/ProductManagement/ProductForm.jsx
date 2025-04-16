import React, { useState } from 'react';

const ProductForm = ({ handleAddProduct }) => {
    const [error, setError] = useState('');
    const handleOnSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const NewProduct = {
            name,
            price,
            quantity,
        }
        if (!name || !price || !quantity) {
            setError('Please fill in all fields');
            return;
        }
        if (isNaN(price) || isNaN(quantity)) {
            setError('Price and Quantity must be numbers');
            return;
        }
        if (price <= 0 || quantity <= 0) {
            setError('Price and Quantity must be greater than zero');
            return;
        }
        setError('');
        handleAddProduct(NewProduct);
    }
    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input type="text" name="name" placeholder='Enter Name' />
                <br />
                <input type="text" name="price" placeholder='Enter Price' />
                <br />
                <input type="text" name="quantity" placeholder='Enter Quantity' />
                <br />
                <input type="submit" value="Submit" />
                <br />
            </form>
            <br />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <p style={{ color: 'green' }}>Please fill in the form to add a product</p>
        </div>
    );
};

export default ProductForm;