const { model, Schema } = require("mongoose");

const eventsSchema = new Schema(
  {
    genre: {
      type: String,
      enum: [
        "CULTURAL",
        "CONCIERTO",
        "DEPORTIVO",
        "FESTIVALES",
        "COMIDA/BEBIDA",
        "CONFERENCIAS",
        "STAND-UP",
      ]
    },
    name: String,
    location: {
      type: { type: String },
      coordinates: [Number]
    },
    date: Date,
    capacity: Number,
    attendees: [
      {
        type: Schema.Types.ObjectId,
        ref: "User"
      }
    ],
    price: Number,
    description: String,
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: "Review"
      }
    ],
    cartel: String,
    availableTickets: Number
  },
  {
    timestamps: true
  }
);

concertSchema.index({ location: "2dsphere" });

module.exports = model("Events", eventsSchema);