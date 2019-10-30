import mongoose from 'mongoose';

const connection = {};
const connectionString = process.env.MONGO_SRV;
const connectionOptions = {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const connectDb = async () => {
    if ( connection.isConnected ) {
        console.log( '[ mongo using existing connection pool ]' );
        return
    }
    try {
        const db = await mongoose.connect( connectionString, connectionOptions );
        connection.isConnected = db.connections[ 0 ].readyState;
        console.log( '[ new mongo connection pool created ]' );
    } catch ( err ) {
        console.log( '[ mongo connection pool error ]: ', err )
    }
};

export default connectDb;

