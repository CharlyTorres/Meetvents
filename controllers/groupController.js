const Group = require('../models/Group')
const User = require('../models/User')
const Event = require('../models/Event')

exports.groupView = (req, res, next) => {
  res.render('group/group')
}

/* exports.groupPost = (req, res, next) => {
  const { formMessage } = req.params

  const userMatch = await User.find( {"events": eventId })

  res.render('group/group', { formMessage })
} */