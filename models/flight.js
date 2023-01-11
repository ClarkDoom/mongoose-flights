import mongoose from "mongoose"

const Schema = mongoose.Schema

const ticketSchema = new Schema({
  seat: {type: String, match: /[A-F][1-9]\d?/ },
  price: {type: Number, min: 0}
})

const flightSchema = new Schema({
  airline: { 
    type: String, 
    // enum: ["American", "Southwest", "United"] 
  },
  airport: { 
    type: String, 
    enum: ["AUS", "DFW", "DEN", "LAX", "SAN"], 
    default: "DEN" 
  },
  departs: { 
    type: Date,
    default: function(){
      let date = new Date()
      // Date.setFullYear(date.getFullYear()+1)
      return date.toLocaleDateString()
    }
  },
  flightNo: {  
    type: Number, 
    min: 10, 
    max: 9999 
  },
  tickets: [ticketSchema]
}, {
  timestamps: true
})

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}

