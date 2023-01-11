import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()

/* GET users listing. */
// router.get('/', function(req, res) {
//   res.send('respond with a resource')
// })

// GET /flights
router.get('/', flightsCtrl.index)

// GET /flights/new
router.get('/new', flightsCtrl.new)

// POST /flights
router.post('/', flightsCtrl.create)

// POST /flights/:id/tickets
router.post('/:id/tickets', flightsCtrl.createTicket)

// DELETE /flights/:id
router.delete('/:id', flightsCtrl.delete)

// GET /flights/:id
router.get("/:id", flightsCtrl.show)

// GET  /flights/:id/edit
router.get('/:id/edit', flightsCtrl.edit)

// put /flights/:id
router.put('/:id', flightsCtrl.update)

export {
  router
}
