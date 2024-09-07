const mongoose = require("mongoose")

// mongoose.connect("mongodb+srv://register:JglEuJx0C69WQDP1@travl.xgnwl.mongodb.net/<dbname>?retryWrites=true&w=majority",{
mongoose.connect("mongodb+srv://ankurbadhwania10:PqIMxY1z4iszPVn1@cluster0.vvaf8.mongodb.net/<dbname>?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(() => {
    console.log(`connection successful`);
}).catch((e)=>{
    console.log(`no connection`);
});
// require('./db');
