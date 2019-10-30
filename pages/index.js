import React from 'react';
import axios from 'axios';
import ProductList from '../components/Index/ProductList'

const Home = ( { products } ) => {

    return (
        <ProductList products={ products }/>
    );
};

Home.getInitialProps = async () => {
    const url = `http://localhost:3000/api/products`;
    try {console.log('api')
        const response = await axios.get( url );
        return { products: response.data }
    } catch(err){
        console.log('[ getInitialProps error ]: ', err);
    }
};

export default Home;
