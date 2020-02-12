const User = require('../models/User')
const Event = require('../models/Event')

exports.loginView = (req,res,next) => {
  res.render('auth/login', {message: req.flash('error')})
}

exports.signUpView = (req,res,next) => {
  res.render('auth/signup')
}

exports.signUpPost = async (req,res,next) => {
  const { name, email, password, genre, age, country } = req.body
  if(email === '' || password === '' || genre === '' || age === '' || country === ''){
    res.render('auth/signup', { 
      message: 'Se requiere llenar todos los campos.'
    })
  }
  const userOnDB = await User.findOne({email})
  if(userOnDB !== null){
    res.render('auth/signup', {
      message: 'Este correo ya está registrado'
    })
  }
  await User.register( {name, email, genre, age, country }, password)
  res.redirect('/login')
}

exports.profileView = async (req,res,next) => {
  const user = req.user
  res.render('auth/profile', {user})
}

exports.profilePost = async (req,res,next) => {

}

exports.eventsView = async (req, res, next) => {
  res.render('auth/events')
}

exports.culturalView = async (req, res, next) => {
  const events = await Event.find({ genre: "CULTURAL" })
  res.render('auth/mainevents', {events} )
}

exports.concertView = async (req, res, next) => {
  const events = await Event.find({ genre: "CONCERT" })
  res.render('auth/mainevents', {events} )
}

exports.sportsView = async (req, res, next) => {
  const events = await Event.find({ genre: "SPORTS" })
  res.render('auth/mainevents', {events} )
}

exports.concertView = async (req, res, next) => {
  const events = await Event.find({ genre: "CONCERT" })
  res.render('auth/mainevents', {events} )
}

exports.festivalsView = async (req, res, next) => {
  const events = await Event.find({ genre: "FESTIVALS" })
  res.render('auth/mainevents', {events} )
}

exports.foodView = async (req, res, next) => {
  const events = await Event.find({ genre: "FOOD/DRINK" })
  res.render('auth/mainevents', {events} )
}

exports.conferenceView = async (req, res, next) => {
  const events = await Event.find({ genre: "CONFERENCE" })
  res.render('auth/mainevents', {events} )
}

exports.standView = async (req, res, next) => {
  const events = await Event.find({ genre: "STAND-UP" })
  res.render('auth/mainevents', {events} )
}

exports.createEvents = async (req,res,next) => {
  res.render('auth/create')
}


exports.createEventsPost = async (req,res,next) => {
  const { genre, name, date, capacity, price, description, photo, longitude, latitude, adress, place} = req.body
  if(genre === '' || name === '' || date === '' || capacity === '' || price === '' || description){
    res.render('auth/create', { 
      message: 'Se requiere llenar todos los campos.'
    })
  }
  const location = {
    type: "Point",
    coordinates: [longitude, latitude]
 };
  const events = await Event.create({genre, name, date, capacity, price, photo, description, location, adress, place})
  res.render('/events', events)
}


exports.savedView = async (req,res,next) => {
  res.render('auth/saved')
}

exports.savedPost = async (req,res,next) => {

}

exports.logout = (req,res) => {
  req.logout()
  res.redirect('/login')
}
