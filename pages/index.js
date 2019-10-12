import React from 'react';
import axios from 'axios';

const Home = ( { products } ) => {

    console.log( '[products]:', products );

    return (
        <>
            products
        </>
    );
};

Home.getInitialProps = async () => {
    const url = `http://localhost:3000/api/product`;
    const response = await axios.get( url );
    return { products: response.data }
};

export default Home;
