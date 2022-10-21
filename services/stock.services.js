const Stock = require('../models/stock')



exports.createStockService = async (data) => {
    console.log(data);
    const stock = new Stock(data);
    const result = await stock.save();
    return result;
}

exports.getStockService = async () => {
    const stocks = await Stock.find({})
    return stocks;
}


exports.getStockDetailsService = async (id) => {
    const stock = Stock.findOne({ _id: id }).populate("brand.id").populate("store.id").populate("suppliedBy.id");
    return stock;
}

exports.updateOneStockService = async (id, data) => {
    const stock = await Stock.findOneAndUpdate({ _id: id }, data)
    return stock;
}

