const mongoose = require('mongoose');

const { Schema } = mongoose;

const userModel = new Schema(
    {
        username: { type: String},
        password: { type: String },
        name: {type: String},
        surname: { type: String},
        address: { type: String},
        email: { type: String},
        loyalcard: {
            cardnum: {type: String},
            barcode: { type: number},
            points: { type: number}
        }
    }    
);

module.exports = mongoose.model('User', userModel);
