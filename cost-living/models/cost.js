//Omer Norman - 206729873
//Nissim Cohen - 308152537
const mongoose = require("mongoose");
const Category = require("./category").schema;
const Schema = mongoose.Schema;

const costSchema = new Schema({
    user_id: {
        type: String,
        required: [true, 'Missing user id.']
    },
    year: {
        type: String,
        required: [true, 'Missing year.']
    },
    month: {
        type: String,
        required: [true, 'Missing month.']
    },
    day: {
        type: String,
        required: [true, 'Missing day.']
    },
    id: {
        type: String,
    },
    description: {
        type: String,
        required: [true, 'Missing description.']
    },
    category: {
        type: Category,
        required: [true, 'Missing category.']
    },
    sum: {
        type: Number,
        required: [true, 'Missing sum.']
    }

});


// Create and export a model
module.exports = mongoose.model("Cost", costSchema);