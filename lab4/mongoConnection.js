const MongoClient = require('mongodb').MongoClient;
const setting = {
    mongoConfig: {
        serverUrl: "mongodb://localhost:27017",
        database: "Yiming_Xu_lab4"
    }
}
let fullUrl = setting.mongoConfig.serverUrl;
let _connection = undefined;
let _db = undefined;

module.exports = async () => {
    if(!_connection){
        _connection = await MongoClient.connect(fullUrl);
        _db = await _connection.db(setting.mongoConfig.database)
    }
    return _db;
};