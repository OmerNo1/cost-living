//Omer Norman - 206729873
//Nissim Cohen - 308152537
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: {
    type: String,
  },
  first_name: {
    required: true,
    type: String,
  },
  last_name: {
    required: true,
    type: String,
  },
  birthday: {
    required: true,
    type: Date,
  }

});

// Create and export a model
module.exports = mongoose.model("User", userSchema);
