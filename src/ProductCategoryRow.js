import React from 'react';

class ProductCategoryRow extends React.Component {
    render() {
        return (
            <tr colSpan="2">
                <th>{this.props.category}</th>
            </tr>
        )
    }
}

export default ProductCategoryRow;