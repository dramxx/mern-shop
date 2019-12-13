import allProducts_JSON from "../../static/products.json";
import ProductSchema from '../../models/Product';
import connectDb from '../../utils/connectDb';

export default async(req, res) => {
    await connectDb();
    const products = await ProductSchema.find().
        then((res) => console.log('[ res ]: ', res)).
        catch((err) => console.log('[ err ]: ', err));
    res.status(200).json(products);
    // res.status( 200 ).json( allProducts_JSON );
};
