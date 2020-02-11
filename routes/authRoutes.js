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
  logout
} = require('../controllers/auth.controller')

router.get('/signup', isLogged, signUpView)
router.post('/signup', signUpPost)

router.get('/login', isLogged, loginView)
router.post('/login', 
  passport.authenticate('local',{
    successRedirect: '/profile',
    failureRedirect: '/login',
    failureFlash: true
  })
)

router.get('/profile', isAuth, profileView)
router.post('/profile', profilePost)

router.get('/create', isAdmin, createEvents)
router.post('/create', createEventsPost)

router.get('/saved', savedView)
router.post('/saved', savedPost)

router.get('/logout', logout)

module.exports = router;
