const { model, Schema } = require("mongoose");

const eventsSchema = new Schema(
  {
    genre: {
      type: String,
      enum: [
        "CULTURAL",
        "CONCERT",
        "SPORTS",
        "FESTIVALS",
        "FOOD/DRINK",
        "CONFERENCE",
        "STAND-UP",
      ]
    },
    name: String,
    adress: String,
    place: String,
    location: {
      type: { type: String },
      coordinates: [Number]
    },
    date: Date,
    capacity: Number,
    photo: {
      type: String,
      default:
        "https://www.dondeir.com/wp-content/uploads/2019/12/los-festivales-de-musica-mas-esperados-de-2020-en-mexico-edc.jpg"
    },
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
    availableTickets: Number
  },
  {
    timestamps: true
  }
);

module.exports = model("Event", eventsSchema);