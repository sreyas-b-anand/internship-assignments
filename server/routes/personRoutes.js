const express = require('express')
const { getPersons, getPerson, addPerson, deletePerson ,editPerson } = require('../controllers/personController')
const perosnRoutes = express.Router()

perosnRoutes.get('/' , getPersons)
perosnRoutes.get('/:id' , getPerson)
perosnRoutes.post('/' , addPerson)
perosnRoutes.put('/:id' , editPerson)
perosnRoutes.delete('/:id' , deletePerson)

module.exports = perosnRoutes