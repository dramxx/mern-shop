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
        return
    }
    const db = await mongoose.connect( connectionString, connectionOptions );
    connection.isConnected = db.connections[ 0 ].readyState;
};

export default connectDb;

