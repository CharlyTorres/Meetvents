const { model, Schema } = require("mongoose");
const PLM = require('passport-local-mongoose')

const matchSchema = new Schema(
  {
    event: {
      type: Schema.Types.ObjectId,
      ref: "Events"
    },
    attendance: {
      type: Boolean,
      default: false
    }
    
  },
  {
    timestamps: true,
    versionKey: false
  }
);


module.exports = model("Matches", orderSchema);