const { Router } = require('express')
const router = Router()
const { isAuth } = require('../middlewares/index')
const { isLogged } = require('../middlewares/index')
const { isAdmin } = require('../middlewares/index')

const {
  groupView
} = require('../controllers/groupController')


router.get('/group', groupView)



module.exports = router;
