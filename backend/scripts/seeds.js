require("dotenv").config();
mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI);
require("./models/Item");
var Item = mongoose.model("Item");
