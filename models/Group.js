const { model, Schema } = require("mongoose");

const groupSchema = new Schema(
  {
    name: String,
    event: [String],
    users: [String],
    messages: String,
    description: String,
    photo: {
      type: String,
      default:
        "https://www.dondeir.com/wp-content/uploads/2019/12/los-festivales-de-musica-mas-esperados-de-2020-en-mexico-edc.jpg"
    },

  },
  {
    timestamps: true
  }
);

module.exports = model("Group", groupSchema);