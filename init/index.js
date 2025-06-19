const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

main()
.then(() => {
  console.log("Connected to DB");
}).catch(err => {
  console.log(err);
})

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/WanderHub');
};

const initDB = async () => {
    await Listing.deleteMany({}); //To clear already existing sample data
      initData.data = initData.data.map((obj) => ({...obj, 
        owner: "685021f1152b7a41e309b9e0"}));
    await Listing.insertMany(initData.data);
    console.log("Data was initialized");
}

initDB();