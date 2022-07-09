const Router = require('express').Router()
const {addUser, changepassowrd, deleteaccount, login} = require("../Controller/user")

Router.post('/register', addUser )
Router.put('/changepassword/:id', changepassowrd)
Router.delete('/deleteaccount/:id', deleteaccount)
Router.post('/login', login)

module.exports = Router