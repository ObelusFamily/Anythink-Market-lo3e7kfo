require("dotenv").config();
mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI);
require("../models/User");
require("../models/Item");
require("../models/Comment");
var Item = mongoose.model("Item");
const i = new Item({title:"title"})
console.log('-------------------------------------b')
i.save().then(()=>{
    
    console.log('-------------------------------------a')
    mongoose.connection.close()
}).catch((e)=>{console.error('faild db seed',e)
mongoose.connection.close()
})
