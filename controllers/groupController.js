const Group = require('../models/Group')
const User = require('../models/User')
const Event = require('../models/Event')

exports.groupView = async (req, res, next) => {
  const users = User.find() 
  const { eventsId } = req.params
  const message = await Group.find(/*{"users": users._id}*/)
  const userGroup = await User.find({ "events": eventsId })
  const eventGroup = await Event.find( {"_id": eventsId} )

  if(userGroup.length > 0 && eventGroup){

   return res.render('group/group', { message, userGroup, eventGroup })
    
  }
 res.render('group/error')
}

 exports.groupPost = async (req, res, next) => {
   const  { name, subject, event, users, userid, messages, description } = req.body
   const user = req.user
  const { messageid } = req.params
  const group = await Group.create({ name, subject, event, users, userid, messages, description })
  await Group.findByIdAndUpdate(group, { $push: { "users": user.name } } )
  await Group.findByIdAndUpdate(group, { $push: { "userid": user._id } } )
  res.render('/group/:messageid', group)

  res.redirect('/events')
  
}

