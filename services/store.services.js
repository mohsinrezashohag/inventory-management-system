const Store = require('../models/store')


exports.getStoreService = async () => {
    const Stores = await Store.find({});
    return Stores;
}

exports.createStoreService = async (data) => {
    console.log(data);
    const store = new Store(data);
    const result = await store.save();
    return result;
}


exports.getStoreDetailsService = async (id) => {
    console.log(id);
    const store = await Store.findOne({ _id: id });
    return store;
}