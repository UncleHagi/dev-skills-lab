import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'

const router = Router()

/* GET users listing. */

// get to /skills/
router.get('/', skillsCtrl.index)

// GET -- localhost:3000/skills/new
router.get('/new', skillsCtrl.new)

// POST -- localhost:3000/skills
router.post('/', skillsCtrl.create)

// GET -- localhost:3000/skills/:id
router.get('/:id', skillsCtrl.show)

// DELETE -- localhost:3000/skills/:id
router.delete('/:id', skillsCtrl.delete)

export {
  router
}
