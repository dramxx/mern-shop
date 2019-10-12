import allProductsJSON from "../../static/products.json";
import connectDb from "../../utils/connectDb";

connectDb()
    .then( () => {
        console.log( '[ MONGO DB POOL CONNECTED ]' );
    } )
    .catch( ( e ) => {
        console.log( '[ MONGO DB POOL CONNECTION ERROR ]:', e );
    } );

export default ( req, res ) => {
    res.status( 200 ).json( allProductsJSON );
};