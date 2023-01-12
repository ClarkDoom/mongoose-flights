import mongoose from "mongoose"

const Schema = mongoose.Schema

const ticketSchema = new Schema({
  seat: {type: String, match: /[A-F][1-9]\d?/ },
  price: {type: Number, min: 0}
})

const flightSchema = new Schema({
  airline: { 
    type: String, 
    enum: ["American", "Southwest", "United"] 
  },
  airport: { 
    type: String, 
    enum: ["AUS", "DFW", "DEN", "LAX", "SAN"], 
    default: "DEN" 
  },
  departs: { 
    type: Date,
    // default: function(){
      // return new Date()

      // let dateNowPlusOneYear = new Date().setFullYear()+1
      // return dateNowPlusOneYear


      // const currentDate = new Date();

      // const currentDayOfMonth = currentDate.getDate();
      // const currentMonth = currentDate.getMonth();
      // const currentYear = currentDate.getFullYear()+1;

      // const oneYearFromNow = (currentMonth + 1) + currentDayOfMonth + currentYear;

      // return oneYearFromNow
    // }
  },
  flightNo: {  
    type: Number, 
    min: 10, 
    max: 9999 
  },
  tickets: [ticketSchema],
  meals: [{type: Schema.Types.ObjectId, ref: 'Meal'}]
}, {
  timestamps: true
})

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}

