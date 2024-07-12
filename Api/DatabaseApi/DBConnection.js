
mongoose.connect(process.env.DB_STRING).then(()=>{console.log("Database Connected Succesfully")},(err)=>{console.error(err)})