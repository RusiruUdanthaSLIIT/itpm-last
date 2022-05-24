const mongoose = require('mongoose');
const schema = mongoose.Schema;

const Inquiry = new schema({
    name: {
        type : String,
        required : true
    },
    nic: {
        type : String,
        required : true
    },
    phone: {
        type : Number,
        required : true
    },
    email: {
        type : String,
        required : true
      
    },
    inquiry: {
        type : String,
        required : true
    }
});

const inquiry = mongoose.model('inquiry', Inquiry);
module.exports = inquiry;