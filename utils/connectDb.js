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
        console.log('\x1b[33m%s\x1b[0m', '[ EXISTING MONGO POOL ]');
        return
    }
    try {
        const db = await mongoose.connect( connectionString, connectionOptions );
        connection.isConnected = db.connections[ 0 ].readyState;
        console.log( '\x1b[33m%s\x1b[0m',  '[ NEW MONGO POOL ]' );
    } catch ( err ) {
        console.log( '\x1b[33m%s\x1b[0m', '[ MONGO POOL ERR ]: ', err )
    }
};

export default connectDb;

