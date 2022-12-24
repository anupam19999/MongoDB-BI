const mongoose=require("mongoose")

const aviationSchema=mongoose.Schema({
     flightNo:String,
     travelBtwCities:String,
     flightTimmings:String,
     planeCategory:String
})

module.exports=mongoose.model("Aviation",aviationSchema)