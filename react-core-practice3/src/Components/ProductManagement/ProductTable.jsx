import React from 'react';

const ProductTable = ({ products }) => {
    return (
        <div>
            <table style={{ border: "1px solid black", width: "100%", textAlign: "center" }}>
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;