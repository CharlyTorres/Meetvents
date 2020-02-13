const { Router } = require('express')
const router = Router()
const passport = require('../config/passport')
const { isAuth } = require('../middlewares/index')
const { isLogged } = require('../middlewares/index')
const { isAdmin } = require('../middlewares/index')

const {
  loginView,
  signUpView,
  signUpPost,
  profileView,
  profilePost,
  createEvents,
  createEventsPost,
  savedView,
  savedPost,
  eventsView,
  culturalView,
  concertView,
  sportsView,
  festivalsView,
  foodView,
  conferenceView,
  standView,
  addEventMatch,
  addFriend,
  usersView,
  usersMatchAssistantsView,
  logout
} = require('../controllers/auth.controller')

router.get('/signup', isLogged, signUpView)
router.post('/signup', signUpPost)

router.get('/login', isLogged, loginView)
router.post('/login', 
  passport.authenticate('local',{
    successRedirect: '/events',
    failureRedirect: '/login',
    failureFlash: true
  })
)

// router.get('/profile', profileView)
router.get('/profile', isAuth, profileView)
router.post('/profile', profilePost)

router.get('/create', isAdmin, createEvents)
router.post('/create', createEventsPost)

router.get('/saved', savedView)
router.post('/saved', savedPost)

router.get('/users', usersView)
router.post('/users/:addfriends', addFriend)


router.get('/events', eventsView)
router.post('/addevents/:addEvent', addEventMatch)
router.get('/assistants/:eventId', usersMatchAssistantsView)

router.get('/cultural', culturalView)
router.get('/concert', concertView)
router.get('/sports', sportsView)
router.get('/festivals', festivalsView)
router.get('/food', foodView)
router.get('/conference', conferenceView)
router.get('/stand', standView)

router.get('/logout', logout)

module.exports = router;
