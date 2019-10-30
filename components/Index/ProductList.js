import React from "react";
import { Card } from 'semantic-ui-react';

const ProductList = ( { products } ) => {

    const processData = ( data ) => {
        return data.map( ( product ) => ( {
            header: product.name,
            image: product.mediaUrl,
            meta: `$${product.price}`,
            color: 'teal',
            fluid: true,
            childKey: product._id,
            href: `/product?_id=${ product._id }`
        } ) )
    };

    return <Card.Group
        items={ processData( products ) }
        itemsPerRow={3}
        centered
        stackable
    />;
};

export default ProductList;
