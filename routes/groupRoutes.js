const { Router } = require('express')
const router = Router()
const { isAuth } = require('../middlewares/index')
const { isLogged } = require('../middlewares/index')
const { isAdmin } = require('../middlewares/index')

const {
  groupView,
  groupPost,
} = require('../controllers/groupController')


router.get('/group/:eventsId', groupView)
router.post('/group', groupPost)



module.exports = router;
