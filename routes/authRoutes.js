const { Router } = require('express')
const router = Router()
const passport = require('../config/passport')

const {
  loginView,
  signUpView,
  signUpPost,
  profileView,
  profilePost,
  savedView,
  savedPost,
  logout
} = require('../controllers/auth.controller')

router.get('/signup', signUpView)
router.post('/signup', signUpPost)

router.get('/login', loginView)
router.post('/login', 
  passport.authenticate('local',{
    successRedirect: '/filter',
    failureRedirect: '/login',
    failureFlash: true
  })
)

router.get('/profile', profileView)
router.post('/profile', profilePost)

router.get('/saved', savedView)
router.post('/saved', savedPost)

router.get('/logout', logout)

module.exports = router;
