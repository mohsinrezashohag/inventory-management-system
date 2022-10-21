const Supplier = require('../models/Supplier')



exports.createSupplierService = async (data) => {
    console.log(data);
    const supplier = new Supplier(data);
    const result = await supplier.save();
    return result;
}

exports.getSupplierService = async () => {
    const suppliers = await Supplier.find({})
    return suppliers;
}


exports.getSupplierDetailsService = async (id) => {
    const supplier = Supplier.findOne({ id: id });
    return supplier;
}

exports.updateOneSupplierService = async (id, data) => {
    const supplier = await Supplier.findOneAndUpdate({ _id: id }, data)
    return supplier;
}

